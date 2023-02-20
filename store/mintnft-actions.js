import { toWei } from "modules/web3Wei";

export const mintNFT = (
  contract,
  account,
  tokenId,
  type,
  amount,
  number,
  BNBPrice,
  packageId
) => {
  return async (dispatch) => {
    var senderForm;
    if (BNBPrice && BNBPrice != 0) {
      senderForm = { from: account, value: BNBPrice };
    } else {
      senderForm = { from: account };
    }

    if (packageId) {
      return await contract.methods
        .mintNFT(tokenId, packageId, toWei(amount), type, number, account)
        .send({ ...senderForm })
        .then((res) => {
          return Promise.resolve("Mint Was Successfull");
        })
        .catch((err) => {
          return Promise.reject("Mint Has Error");
        });
    } else {
      return await contract.methods
        .mintNFT(tokenId, toWei(amount), type, number, account)
        .send({ ...senderForm })
        .then((res) => {
          return Promise.resolve("Mint Was Successfull");
        })
        .catch((err) => {
          return Promise.reject("Mint Has Error");
        });
    }
  };
};

export const calculateBNBPrice = (contract, tokenId, howMany) => {
  return async (dispatch) => {
    return await contract.methods
      .toBnbPrice(tokenId, howMany)
      .call()
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject("Somthing went wrong !");
      });
  };
};

export const getBUSDPriceFromId = (contract, tokenId) => {
  return async (dispatch) => {
    return await contract.methods
      .AllNft(tokenId)
      .call()
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject("Can't get Price !");
      });
  };
};
