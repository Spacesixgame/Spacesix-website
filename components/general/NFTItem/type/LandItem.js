import React from "react";
import NFTItemCount from "../NFTItemCount";
import NFTItemName from "../NFTItemName";
import NFTItemResources from "../NFTItemResources";

const LandItem = ({ level, resoursesValue, name, soldOut, count }) => {
  return (
    <>
      <NFTItemName name={name} />
      <NFTItemResources
        level={level}
        resourceValue={resoursesValue}
        name={name}
      />
      {count != undefined && <NFTItemCount count={count} soldout={soldOut} />}
    </>
  );
};

export default LandItem;
