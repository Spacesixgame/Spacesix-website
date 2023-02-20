import { Button } from "@chakra-ui/react";
import React from "react";
import styles from "./PresaleFilterAction.module.css";
import { HiOutlineFilter } from "react-icons/hi";

const PresaleFilterAction = ({ onSupplyFilters }) => {
  return (
    <Button className={styles["filter-btn"]} onClick={onSupplyFilters}>
      <HiOutlineFilter className={styles.icon} />
      Filter
    </Button>
  );
};

export default PresaleFilterAction;
