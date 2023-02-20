export const approveContract = (contract, amount, account, address) => {
  return async (dispatch) => {
    return await contract.methods
      .approve(address, amount)
      .send({ from: account })
      .then((res) => {
        return Promise.resolve("Approve Was Successfull");
      })
      .catch((err) => {
        return Promise.reject("Approve Has Error");
      });
  };
};

export const getAllowence = (contract, account, contractAddress) => {
  return async (dispatch) => {
    return await contract.methods
      .allowance(account, contractAddress)
      .call()
      .then(async (res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
};

export const getBalanceOf = (contract, account) => {
  return async (dispatch) => {
    return await contract.methods
      .balanceOf(account)
      .call()
      .then(async (res) => {
        return Promise.resolve(res);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };
};
