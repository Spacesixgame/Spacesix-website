import React from "react";
import MintSingleNFT from "../action/MintMultipleNFT";
import NFTItemName from "../NFTItemName";
import NFTItemNumber from "../NFTItemNumber";

const DefaultItem = ({
  level,
  name,
  soldOut,
  count,
  category,
  tokenId,
  amount,
  NFTNumber,
  contractAmount,
  NFTCounter,
  onChangeItemNumber,
}) => {
  return (
    <>
      <NFTItemName name={name} />
    </>
  );
};

export default DefaultItem;
