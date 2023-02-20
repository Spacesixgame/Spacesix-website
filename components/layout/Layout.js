import Footer from "components/footer/Footer";
import Navbar from "components/navbar/NavbarMain";
import styles from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  connectAccountOnPageload,
  getCurrentChainId,
  switchNetwork,
} from "store/wallet-actions";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { constants } from "config/globalConfig";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const { chainId } = constants;
  const account = useSelector((state) => state.wallet.address);

  useEffect(() => {
    const loadFunctions = async () => {
      await dispatch(connectAccountOnPageload());
    };

    if (chainId) {
      loadFunctions();
    }
  }, [chainId]);

  useEffect(() => {
    if (account && chainId) {
      checkCurrentChainId();
    }
  }, [chainId, account]);

  const checkCurrentChainId = async () => {
    let currentChainId = await dispatch(getCurrentChainId());

    if (account && chainId && chainId != currentChainId) {
      toast("Please change your netword !");
      await dispatch(switchNetwork(chainId));
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", checkCurrentChainId);
    }

    // import("@lottiefiles/lottie-player");
  }, []);

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <Navbar />

      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
