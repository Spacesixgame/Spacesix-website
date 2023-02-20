import React from "react";
import styles from "./Loader.module.css";
import { Spinner } from "@chakra-ui/react";

const Loader = (props) => {
  return (
    <div className={styles.container} {...props}>
      <Spinner
        className={styles["gradinet-border"]}
        fontSize="6xl"
        fontWeight="extrabold"
        h="70px"
        w="70px"
        emptyColor="#444444"
        thickness="4px"
        size="xl"
      />
    </div>
  );
};

export default Loader;
