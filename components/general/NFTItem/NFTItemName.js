import React from "react";
import styles from "./NFTItemName.module.css";

const NFTItemName = ({ name }) => {
  return <h5 style={{ marginBlock: "16px 8px" }}>{name}</h5>;
};

export default NFTItemName;
