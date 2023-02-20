export const stake = (contract, account, tokenId, stakeTime) => {
  return async () => {
    return await contract.methods
      .stake(tokenId, stakeTime)
      .send({ from: account })
      .then((res) => {
        return Promise.resolve("Stake Was Successfull");
      })
      .catch((err) => {
        return Promise.reject("Stake Has Error");
      });
  };
};

export const approveNFTItem = (contract, account, stakeAddress, tokenId) => {
  return async () => {
    return await contract.methods
      .approve(stakeAddress, tokenId)
      .send({ from: account })
      .then((res) => {
        return Promise.resolve("Approve Stake");
      })
      .catch((err) => {
        return Promise.reject("Approve Has Error");
      });
  };
};

export const checkGetApproved = (contract, account, tokenId) => {
  return async () => {
    return await contract.methods
      .getApproved(tokenId)
      .call({ from: account })
      .then((res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        console.log('errr')
        return Promise.reject("Get Approve Has error!");
      });
  };
};

export const unStake = (contract, account, tokenId) => {
  return async () => {
    return await contract.methods
      .unStake(tokenId)
      .send({ from: account })
      .then((res) => {
        return Promise.resolve("UnStake Was Successfull");
      })
      .catch((err) => {
        return Promise.reject("UnStake Has Error");
      });
  };
};
