// import BuyNFTAction from "components/general/NFTItem/action/BuyNFTAction";
import NFTItem from "components/general/NFTItem";
// import SoldoutNFTAction from "components/general/NFTItem/action/SoldoutNFTAction";
import React, { useState } from "react";
// import PresaleNFTItemPrice from "./PresaleNFTItemPrice";
// import styles from "./PresaleNFTItem.module.css";
// import { roundDecimal } from "modules/web3Wei";
import PresaleNFTItemAction from "./PresaleNFTItemAction";

const PresaleNFTItem = ({ item, onUpdateList }) => {
  // const [NFTNumber, setNFTNumber] = useState(1);
  // const [selectedType, setselectedType] = useState("1");
  // const [BNBPrice, setBNBPrice] = useState(0);

  return (
    <NFTItem
      staticFile={item.staticFile}
      resoursesValue={item.resourses}
      count={item.count}
      name={item.name}
      soldOut={item.soldOut}
      level={item.level}
      stakedTime={item.stakedTime}
      NFTCounter={true}
      // onChangeItemNumber={(num) => setNFTNumber(num)}
      category={item.category}
      traits={item.traits}
      // className={styles["presale__nft-item"]}
      image={item.image || null}
    >
      {{
        action: (
          <PresaleNFTItemAction
            amount={item.amount}
            category={item.category}
            contractAmount={item.contractAmount}
            tokenId={item.tokenId}
            count={item.count}
            soldOut={item.soldOut}
            level={item.level}
            packages={item.packages}
          />
          // <>
          //   {item.soldOut || item.count == 0 ? (
          //     <SoldoutNFTAction />
          //   ) : (
          //     <BuyNFTAction
          //       onUpdateList={onUpdateList}
          //       price={item.amount}
          //       contractPrice={item.contractAmount}
          //       tokenId={item.tokenId}
          //       key={item.tokenId}
          //       level={item.level}
          //       number={NFTNumber}
          //       selectedType={selectedType}
          //       BNBPrice={BNBPrice}
          //       category={item.category}
          //     />
          //   )}
          // </>
        ),
        // price: (
        //   <PresaleNFTItemPrice
        //     howMany={NFTNumber}
        //     price={roundDecimal(item.amount, 1)}
        //     tokenId={item.tokenId}
        //     category={item.category}
        //     onSetSelectedType={(type, price) => {
        //       setselectedType(type);
        //       setBNBPrice(price);
        //     }}
        //   />
        // ),
      }}
    </NFTItem>
  );
};

export default PresaleNFTItem;
