import { ethers } from "ethers";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { walletActions } from "./wallet-slice";
import { getNonce, signNonce, login, onChangeAccount } from "./auth-actions";
import tokenService from "services/token.service";
import toast from "react-hot-toast";
import { useWeb3 } from "hooks/use-web3";

const web3 = useWeb3();

const connectWallet = async (provider) => {
  await provider.send("eth_requestAccounts", []);

  try {
    const signer = await provider.getSigner();
    const network = await provider.getNetwork();
    const address = await signer.getAddress();

    return { address, networkId: network.chainId };
  } catch (error) {
    console.error("error2", error);
  }
};

const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

const providerForWalletType = async (walletType) => {
  switch (walletType) {
    case "MetaMask":
      if (isMetaMaskInstalled) return window.ethereum;
      else {
        toast.error("Metamask is not installed in your browser !");
        return;
      }
    // else if (window.web3) {
    //   console.log("web3 provider");
    //   return window.web3.currentProvider;
    // }

    case "walletconnect":
      const { default: WalletConnectProvider } = await import(
        "@walletconnect/web3-provider"
      );

      const walletConnectProvider = new WalletConnectProvider({
        infuraId: infuraId,
        chainId: chainId,
      });

      await walletConnectProvider.enable();
      return walletConnectProvider;

    case "Coinbase":
      const coinbaseWallet = new CoinbaseWalletSDK({
        appName: "My Awesome App",
        darkMode: false,
      });

      return coinbaseWallet.makeWeb3Provider(
        `https://${networkName}.infura.io/v3/${infuraId}`,
        chainId
      );
  }
};

export const connectAccountOnPageload = () => {
  return async (dispatch) => {
    let jwtToken = tokenService.getAccessToken();

    if (jwtToken) {
      await web3.eth.getAccounts().then(async (accounts) => {
        await dispatch(walletActions.updated({ address: accounts[0] }));

        if (accounts[0]) {
          await dispatch(onChangeAccount());
        }
      });
    }
  };
};

export const connectAccount = (walletType, reffralCode) => {
  return async (dispatch, getState) => {
    const { referralCode } = getState().auth;

    const provider = new ethers.providers.Web3Provider(
      await providerForWalletType(walletType)
    );

    let { address, networkId } = await connectWallet(provider);

    let nonce = await dispatch(getNonce(address));
    if (!nonce) {
      return;
    }

    let signature = await dispatch(signNonce(address, nonce));

    if (!signature) {
      return;
    }

    let loginResponse = await dispatch(login(signature, address, referralCode));
    if (
      loginResponse &&
      loginResponse.data &&
      loginResponse.data.message === "OK"
    ) {
      toast.success("Login Successfully!");

      dispatch(
        walletActions.connected({
          address,
          networkId,
          connected: true,
        })
      );

      await dispatch(onChangeAccount());
    } else {
      dispatch(
        walletActions.connected({
          address: "",
          networkId: null,
          connected: false,
        })
      );

      toast.error("Login Wasn`t Successfull!");
    }
  };
};

export const getCurrentChainId = () => {
  return async (dispatch) => {
    return Number(window.ethereum.networkVersion);
  };
};

export const switchNetwork = (id) => {
  return async () => {
    await window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(id) }],
      })
      .catch((err) => {
        console.log("err in switch network");
      });
  };
};

export const getBalance = (account) => {
  return async () => {
    var balance = await web3.eth.getBalance(account); //Will give value in.
    return balance;
  };
};
