import React from "react";
import { useDispatch } from "react-redux";
import styles from "./ProviderList.module.css";
import Provider from "./Provider";
import { connectAccount } from "store/wallet-actions";

function ProviderList() {
  const dispatch = useDispatch();

  const providers = [
    {
      id: "injected",
      name: "MetaMask",
      logo: "metamask.svg",
      type: "injected",
      check: "isMetaMask",
    },
    // {
    //   id: "injected",
    //   name: "Coinbase",
    //   logo: "coinbasewallet.svg",
    //   type: "injected",
    //   check: "isCoinbaseWallet",
    // },
  ];

  const onWalletListItemClick = (walletName) => {
    dispatch(connectAccount(walletName));
  };

  return (
    <div className={styles["web3-modal"]}>
      {providers.map((provider) => (
        <Provider
          key={provider.name}
          name={provider.name}
          logo={provider.logo}
          description={provider.description}
          onClick={onWalletListItemClick}
        />
      ))}
    </div>
  );
}

export default ProviderList;
