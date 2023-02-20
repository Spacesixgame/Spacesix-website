import React from "react";
import styles from "./NavbarAccount.module.css";
import Button from "react-bootstrap/Button";
import NavbarAccountDisconnect from "./NavbarAccountDisconnect";

const NavbarAccount = ({ account }) => {
  function formatAddress(address, padding) {
    if (address && address.length > 0) {
      return `${address.substr(0, padding + 2)}…${address.substr(
        padding * -1
      )}`;
    } else {
      return address;
    }
  }

  return (
    <div className={styles["navbar__account-detail"]}>
      <span className={styles["navbar__account-name"]}>
        {formatAddress(account, 4)}
      </span>
      <div className={styles["connect-detail"]}>
        <Button size="sm" className={styles.badget}>
          Connected
        </Button>
        <NavbarAccountDisconnect />
      </div>
    </div>
  );
};

export default NavbarAccount;
