// import ImageUI from "components/ui/ImageUI";
// import { roundDecimal } from "modules/web3Wei";
import React, { useState } from "react";
import styles from "./NFTItemPrice.module.css";
import NFTItemPriceBNB from "./NFTItemPriceBNB";
import NFTItemPriceBUSD from "./NFTItemPriceBUSD";

const NFTItemPrice = ({
  BUSDPrice,
  onSetSelectedType,
  howMany,
  category,
  tokenId,
  hideBUSDPrice,
  hideBNBPrice,
}) => {
  //   const beforeDiscountPrice = (price) => {
  //     let presentage = price * 0.15;
  //     let newPrice = Number(price) + Number(presentage);
  //     return newPrice.toString();
  //   };

  const [selectedType, setselectedType] = useState(0);

  const selectActionType = (type, price) => {
    setselectedType(type);
    onSetSelectedType(type, price);
  };

  return (
    // <div className={styles["nft-item__price"]}>
    //   <p>{roundDecimal(price,1)} BUSD</p>
    //   <Figure className={styles["nft-item__price-logo"]}>
    //     <ImageUI src={"busd-logo.png"} width="30px" height="30px" />
    //   </Figure>
    // </div>
    <div className={styles.prices}>
      {!hideBUSDPrice && (
        <NFTItemPriceBUSD
          selectedType={selectedType}
          price={BUSDPrice}
          onSelectActionType={selectActionType}
        />
      )}
      {!hideBNBPrice && (
        <NFTItemPriceBNB
          tokenId={tokenId}
          howMany={howMany}
          selectedType={selectedType}
          category={category}
          onSelectActionType={selectActionType}
        />
      )}
    </div>
  );
};

export default NFTItemPrice;
