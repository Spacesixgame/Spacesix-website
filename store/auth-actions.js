import TokenService from "services/token.service";
import api from "services/api";
import { walletActions } from "./wallet-slice";
import { useWeb3 } from "hooks/use-web3";

const web3 = useWeb3();

export const getNonce = (address) => {
  return async (dispatch) => {
    return await api
      .get("auth/" + address + "/nonce")
      .then((res) => {
        return res.data.data.message;
      })
      .catch((err) => {
        return Promise.reject("Opration Failed!");
      });
  };
};

export const signNonce = (address, nonce) => {
  return async (dispatch) => {
    return await web3.eth.personal.sign(nonce, address).then((signature) => {
      return signature;
    });
  };
};

export const login = (signature, address, referralCode) => {
  return async (dispatch) => {
    var data = {};
    if (referralCode) {
      data = {
        method: "META_MASK",
        walletAddress: address,
        signature: signature,
        referral: {
          referredBy: referralCode,
        },
      };
    } else {
      data = {
        method: "META_MASK",
        walletAddress: address,
        signature: signature,
      };
    }

    return await api
      .post("auth/login", data)
      .then((res) => {
        TokenService.setAccessToken(res.data.data.accessToken);
        return res;
      })
      .catch((err) => {
        console.log("login has error", err);
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(walletActions.updated({ address: null }));
    TokenService.removeToken();
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(walletActions.updated({ address: account }));
  };
};

export const onChangeAccount = () => {
  return async (dispatch) => {
    window.ethereum.on("accountsChanged", (accounts) => {
      accounts[0] ? dispatch(updateAccount(accounts[0])) : dispatch(logout());
    });
  };
};
