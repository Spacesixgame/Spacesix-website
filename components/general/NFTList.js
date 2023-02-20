import React from "react";
import NFTItem from "./NFTItem";
import styles from "./NFTList.module.css";

const NFTList = ({ NFTList, className }) => {
  return (
    <ul className={styles["nft-list"] + " " + className}>
      {NFTList &&
        NFTList.map((item, index) => (
          <NFTItem key={item.tokenId} item={item} />
        ))}

      <li key="hidden-1" className={styles["hidden-flex-item"]}></li>
      <li key="hidden-2" className={styles["hidden-flex-item"]}></li>
      <li key="hidden-3" className={styles["hidden-flex-item"]}></li>
      <li key="hidden-4" className={styles["hidden-flex-item"]}></li>
    </ul>
  );
};

export default NFTList;
