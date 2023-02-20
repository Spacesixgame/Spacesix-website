import React from "react";
import { useSelector } from "react-redux";
import ConnectWallet from "./ConnectWallet";
import NavbarAccount from "./NavbarAccount";

const UserAccount = () => {
  const account = useSelector((state) => state.wallet.address);

  if (account) {
    return <NavbarAccount account={account} />;
  }

  return <ConnectWallet />;
};

export default UserAccount;
