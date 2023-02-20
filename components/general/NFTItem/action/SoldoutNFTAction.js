import { Button } from "@chakra-ui/react";
import React from "react";
import styles from './styles.module.css'

// import { Button } from "react-bootstrap";

const SoldoutNFTAction = () => {
  return (
    <button disabled={true} className={styles.action}>
      Sold Out
    </button>
  );
};

export default SoldoutNFTAction;
