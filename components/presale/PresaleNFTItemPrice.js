import React, { useState } from "react";
import styles from "./PresaleNFTItemPrice.module.css";
import NFTItemPriceBNB from "../general/NFTItem/price/NFTItemPriceBNB";
import NFTItemPriceBUSD from "../general/NFTItem/price/NFTItemPriceBUSD";

const PresaleNFTItemPrice = ({
  price,
  tokenId,
  howMany,
  category,
  onSetSelectedType,
}) => {
  const [selectedType, setselectedType] = useState(0);

  const selectActionType = (type, price) => {
    setselectedType(type);
    onSetSelectedType(type, price);
  };

  return (
    <div className={styles["nft-item__price"]}>
      <NFTItemPriceBUSD
        selectedType={selectedType}
        price={price}
        onSelectActionType={selectActionType}
      />
      <NFTItemPriceBNB
        tokenId={tokenId}
        howMany={howMany}
        selectedType={selectedType}
        category={category}
        onSelectActionType={selectActionType}
      />
    </div>
  );
};

export default PresaleNFTItemPrice;
