import MintMultipleNFT from "components/general/NFTItem/action/MintMultipleNFT";
import MintPackageNFT from "components/general/NFTItem/action/MintPackageNFT";
import React from "react";
import styles from "./PresaleNFTItemAction.module.css";

const PresaleNFTItemAction = ({
  amount,
  category,
  contractAmount,
  count,
  level,
  soldOut,
  tokenId,
  packages
}) => {
  
  if (packages) {
    return <MintPackageNFT category={category} tokenId={tokenId} packageList={packages}></MintPackageNFT>;
  }

  return (
    <MintMultipleNFT
      amount={amount}
      category={category}
      contractAmount={contractAmount}
      count={count}
      level={level}
      soldOut={soldOut}
      tokenId={tokenId}
    />
  );
};

export default PresaleNFTItemAction;
