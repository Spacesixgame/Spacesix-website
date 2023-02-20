import React from "react";
import NFTItemCount from "../NFTItemCount";
import NFTItemName from "../NFTItemName";

const ResourceItem = ({ name, packageCount }) => {
  return (
    <>
      <NFTItemName name={name} />
      {packageCount && <NFTItemCount count={packageCount} />}
    </>
  );
};

export default ResourceItem;
