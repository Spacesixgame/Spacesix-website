import NFTItemMedia from "components/general/NFTItem/media";
import React from "react";
import SliderPagination from "./SliderPagination";
import styles from "./SliderNFTCard.module.css";

const NFTCollectionNFTCard = ({ currentNFT, onSetCurrentPage }) => {
  return (
    <div className={styles.card}>
      {currentNFT.staticFile && (
        <NFTItemMedia
          className={styles.media}
          key={currentNFT.category + currentNFT.tokenId}
          src={currentNFT.staticFile}
          autoplay
        />
      )}
      <SliderPagination onSetCurrentPage={onSetCurrentPage} />
    </div>
  );
};

export default NFTCollectionNFTCard;
