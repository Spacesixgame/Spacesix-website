import React from "react";
import styles from "./CheckConnectionAlarm.module.css";

const CheckConnectionAlarm = () => {
  return (
    <div className={styles.alarm}>
      <h4>Something went wrong, Check Your Connection !</h4>
    </div>
  );
};

export default CheckConnectionAlarm;
