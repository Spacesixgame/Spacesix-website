import React from "react";
import styles from "./NFTItemCount.module.css";

const NFTItemCount = ({ count, soldout, className }) => {
  return (
    <div className={`${styles["count"]} ${className}`}>
      Count
      {soldout ? <p>0</p> : <p>{count}</p>}
    </div>
  );
};

export default NFTItemCount;
