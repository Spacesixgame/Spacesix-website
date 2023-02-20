import React from "react";
import styles from "./NFTItemPriceBUSD.module.css";
import ImageUI from "components/ui/ImageUI";
import { Figure } from "react-bootstrap";

const NFTItemPriceBUSD = ({ price, selectedType, onSelectActionType }) => {
  return (
    <div
      className={`${styles.container} ${
        selectedType == 1 ? styles["active"] : ""
      }`}
    >
      <div
        className={styles["logo"]}
        onClick={() => onSelectActionType("1", 0)}
      >
        <Figure className={styles["figure"]}>
          <ImageUI src={"BUSD.png"} width="30px" height="30px" />
        </Figure>
        <p>BUSD</p>
      </div>

      <div className={styles["price-value"]}>
        <p>{price} BUSD</p>
      </div>
    </div>
  );
};

export default NFTItemPriceBUSD;
