import React, { useState } from "react";
import Packages from "../packages";
import NFTItemPrice from "../price/NFTItemPrice";
import MintAction from "./MintAction";

const MintPackageNFT = ({ category, tokenId, packageList }) => {
  const [selectedType, setselectedType] = useState("1");
  let initializedPackage = {
    count: 0,
    amount: 0,
    normalizedAmount: 0,
    selection: -1,
  };
  const [selectedPackage, setselectedPackage] = useState(initializedPackage);

  return (
    <>
      <Packages
        packageList={packageList}
        selectedItem={selectedPackage}
        onSetSelectedPackage={(item) => setselectedPackage(item)}
      />

       <NFTItemPrice
        BUSDPrice={selectedPackage.normalizedAmount}
        category={category}
        howMany={selectedPackage.selection}
        tokenId={tokenId}
        onSetSelectedType={(type, price) => {
          setselectedType(type);
        }}
      />

      <MintAction
        contractPrice={selectedPackage.amount}
        tokenId={tokenId}
        key={"mint-action" + selectedPackage.selection + "-" + tokenId}
        number={1}
        selectedType={selectedType}
        category={category}
        packageId={selectedPackage.selection}
        disableMint={selectedPackage.selection < 0}
      />
    </>
  );
};

export default MintPackageNFT;
