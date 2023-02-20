import React from "react";
import SpaceshipNFTDetails from "../spaceship";
import NFTItemCount from "../NFTItemCount";
import NFTItemName from "../NFTItemName";

const SpaceshipItem = ({ level, name, soldOut, count, traits }) => {
  return (
    <>
      <NFTItemName name={name} />

      <SpaceshipNFTDetails level={level} traits={traits} />

      {count != undefined && <NFTItemCount count={count} soldout={soldOut} />}
    </>
  );
};

export default SpaceshipItem;
