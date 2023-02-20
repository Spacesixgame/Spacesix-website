import React from "react";
import styles from './NFTItemUserNFTCount.module.css'

const NFTItemUserNFTCount = ({ quantity }) => {
  return (
    <div className={styles.count}>
      <p>Count</p>
      <p>{quantity}</p>
    </div>
  );
};

export default NFTItemUserNFTCount;
