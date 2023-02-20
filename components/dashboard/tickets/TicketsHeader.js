import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./TicketsHeader.module.css";

const TicketsHeader = () => {
  return (
    <Heading className={styles.header} as={"h5"} size="md">
      My Tickets
    </Heading>
  );
};

export default TicketsHeader;
