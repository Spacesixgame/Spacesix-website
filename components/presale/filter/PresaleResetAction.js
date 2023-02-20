import { Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineClear } from "react-icons/ai";
import styles from "./PresaleResetAction.module.css";

const PresaleResetAction = ({ onResetFilters }) => {
  return (
    <Button className={styles["filter-btn"]} onClick={onResetFilters}>
      <AiOutlineClear className={styles.icon} />
      Clear Filters
    </Button>
  );
};

export default PresaleResetAction;
