import { Heading } from "@chakra-ui/react";
import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./SidebarAccount.module.css";

const SidebarAccount = () => {
  return (
    <div className={styles.account}>
      <ImageUI src="userImage.png" width="50" height="50" />
      <Heading as="h5" size="sm">
        Account's Name
      </Heading>
    </div>
  );
};

export default SidebarAccount;
