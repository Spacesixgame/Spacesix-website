import React, { useEffect, useState } from "react";
import NFTCollectionSlider from "./slider";
import NFTCollectionSwitch from "./NFTCollectionSwitch";
import styles from "./NFTCollectionMain.module.css";
import { useSelector } from "react-redux";

const NFTCollectionMain = () => {
  const [currentCategory, setcurrentCategory] = useState("spaceship");
  const [NFTList, setNFTList] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const allNFTs = useSelector((state) => state.nftList.homeNFTList);

  const getNFTList = () => {
    setisLoading(true);
    var list = [];

    for (let index = 0; index < allNFTs.length; index++) {
      if (currentCategory !== "lands") {
        if (allNFTs[index].category === currentCategory) {
          list.push(allNFTs[index]);
        }
      } else {
        list.push(allNFTs[index]);
      }
    }

    setNFTList(list);
    setisLoading(false);
  };

  useEffect(() => {
    if (currentCategory && allNFTs) {
      getNFTList();
    }
  }, [currentCategory, allNFTs]);

  return (
    <>
      <NFTCollectionSwitch
        selectedCategory={currentCategory}
        onSelectCategory={(cat) => setcurrentCategory(cat)}
      />

      <NFTCollectionSlider
        className={isLoading ? styles.fade : ""}
        // key={"slider" + currentCategory}
        NFTList={NFTList}
      />
    </>
  );
};

export default NFTCollectionMain;
