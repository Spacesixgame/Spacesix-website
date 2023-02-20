import React from "react";
import styles from "./PackageItem.module.css";

const PackageItem = ({ count,active, amount, normalizedAmount,onSetSelectedItem }) => {
  return (
    <div onClick={onSetSelectedItem} className={`${styles.item} ${active && styles.active}`}>
      <div>
        <p>price :</p>
        <p> {normalizedAmount} BNB</p>
      </div>
      <div>
        <p>count : </p>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default PackageItem;
