import React, { useState } from "react";
import NFTItemNumber from "../NFTItemNumber";
import NFTItemPrice from "../price/NFTItemPrice";
import MintAction from "./MintAction";
import SoldoutNFTAction from "./SoldoutNFTAction";

const MintMultipleNFT = ({
  amount,
  category,
  tokenId,
  contractAmount,
  soldOut,
  count,
  hideBUSDPrice,
  hideBNBPrice,
  disableNumber,
  selectedPackageId,
  disableMint,
}) => {
  const [selectedType, setselectedType] = useState("1");
  const [BNBPrice, setBNBPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <NFTItemPrice
        BUSDPrice={amount}
        category={category}
        hideBNBPrice={hideBNBPrice}
        hideBUSDPrice={hideBUSDPrice}
        howMany={quantity}
        tokenId={tokenId}
        onSetSelectedType={(type, price) => {
          setselectedType(type);
          setBNBPrice(price);
        }}
      />

      <>
        {soldOut || count == 0 ? (
          <SoldoutNFTAction />
        ) : (
          <MintAction
            price={amount}
            contractPrice={contractAmount}
            tokenId={tokenId}
            key={tokenId}
            number={quantity}
            selectedType={selectedType}
            BNBPrice={BNBPrice}
            category={category}
            packageId={selectedPackageId}
            disableMint={disableMint}
          />
        )}
      </>

      {!disableNumber && (
        <NFTItemNumber
          count={count}
          disable={soldOut}
          onChangeItemNumber={(num) => setQuantity(num)}
        />
      )}
    </>
  );
};

export default MintMultipleNFT;
