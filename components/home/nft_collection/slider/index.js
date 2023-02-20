import NFTItemMedia from "components/general/NFTItem/media";
import React, { useEffect, useState } from "react";
import SliderNFTDetail from "./SliderNFTDetail";
import SliderPagination from "./SliderPagination";
import styles from "./styles.module.css";

const NFTCollectionSlider = ({ NFTList, className }) => {
  const [currentNFT, setCurrentNFT] = useState({});
  const [currentSlide, setCurrentSlide] = useState(1);

  function getCurrentNFT(current) {
    let NFT = { ...NFTList[current - 1] };
    setCurrentNFT(NFT);
  }

  function changePageNumber(page) {
    setCurrentSlide(page);
    getCurrentNFT(page);
  }

  useEffect(() => {
    setCurrentSlide(1);
    getCurrentNFT(1);
  }, [NFTList]);

  return (
    <div className={`${styles.main} ${className}`}>
      <SliderNFTDetail
        name={currentNFT.name}
        resourses={currentNFT.resourses}
        count={currentNFT.count}
        traits={currentNFT.traits}
        category={currentNFT.category}
        level={currentNFT.level}
        description={currentNFT.description}
      />

      <div className={styles.card}>
        <NFTItemMedia
          className={styles.media}
          key={currentNFT.category + currentNFT.tokenId}
          src={currentNFT.staticFile}
          autoplay
        />
        <SliderPagination
          pageNumber={currentSlide}
          onSetCurrentPage={changePageNumber}
        />
      </div>
    </div>
  );
};

export default NFTCollectionSlider;
