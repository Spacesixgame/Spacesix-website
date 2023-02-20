import React from "react";
import styles from "components/general/NFTList.module.css";
import PresaleNFTItem from "./PresaleNFTItem";

const PresaleNFTList = ({ NFTList, onUpdateList }) => {
 
  return (
    <ul className={styles["nft-list"]}>
      {NFTList &&
        NFTList.map((item, index) => (
          <PresaleNFTItem
            key={item.id}
            item={item}
            onUpdateList={onUpdateList}
          />
        ))}

      <li key="hidden-1" className={styles["hidden-flex-item"]}></li>
      <li key="hidden-2" className={styles["hidden-flex-item"]}></li>
      <li key="hidden-3" className={styles["hidden-flex-item"]}></li>
      <li key="hidden-4" className={styles["hidden-flex-item"]}></li>
    </ul>
  );
};

export default PresaleNFTList;
