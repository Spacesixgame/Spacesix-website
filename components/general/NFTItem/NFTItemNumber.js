import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import styles from "./NFTItemNumber.module.css";

const NFTItemNumber = ({ count, disable, onChangeItemNumber }) => {
  const [number, setNumber] = useState(1);
  const disableSub = number < 2 || disable;
  const disableAdd = number == count || disable;

  function changeNumberHandler(num) {
    let newNumber = number + num;

    if (newNumber < 1) {
      return;
    } else if (newNumber > count) {
      return;
    } else {
      setNumber(newNumber);
      onChangeItemNumber(newNumber);
    }
  }

  return (
    <div className={`${styles.container} ${disable && styles["disable"]}`}>
      <Button
        className={styles["sub-btn"]}
        onClick={() => changeNumberHandler(-1)}
        disabled={disableSub}
      >
        <IoRemove />
      </Button>
      <p className={styles["number"]}>{number}</p>
      <Button
        className={styles["add-btn"]}
        onClick={() => changeNumberHandler(1)}
        disabled={disableAdd}
      >
        <IoAdd />
      </Button>
    </div>
  );
};

export default NFTItemNumber;
