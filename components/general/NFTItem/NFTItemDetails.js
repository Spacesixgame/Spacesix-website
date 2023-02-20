import React from "react";
// import styles from "./NFTItemDetails.module.css";
import NFTItemResources from "./NFTItemResources";

const NFTItemDetails = ({ name, level, resoursesValue }) => {
  return (
      <NFTItemResources
        level={level}
        resourceValue={resoursesValue}
        name={name}
      />
  );
};

export default NFTItemDetails;
