import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./MyCollectionMain.module.css";
import {  getMyNFTs } from "helpers/api-utils";
import MyCollectionNFTList from "./MyCollectionNFTList";
import Loader from "components/ui/Loader";
import MyCollectionSwitch from "./MyCollectionSwitch";

const MyCollectionMain = () => {
  const account = useSelector((state) => state.wallet.address);
  const [myNFTs, setMyNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("NFT"); //must be one of [NFT, NFT_SPACESHIP]
  const [error, setError] = useState("");

  // clearUserNFTsCache()

  const getMyNFTsMethod = async () => {
    setIsLoading(true);
    await getMyNFTs(category)
      .then((res) => {
        setMyNFTs(res);
      })
      .catch((err) => {
        setMyNFTs(null);
        setError("Somthing went wrong!");
      });
    setIsLoading(false);
  };

  useEffect(() => {
    if (account && category) {
      getMyNFTsMethod();
    }
  }, [category, account]);

  if (!account) {
    return <h4 className={styles["message"]}>Connect Your Wallet!</h4>;
  }

  var list;
  if (isLoading) {
    list = <Loader />;
  } else if (error) {
    list = <h4 className={styles["message"]}>{error}</h4>;
  } else {
    list = (
      <MyCollectionNFTList
        category={category}
        NFTList={myNFTs}
        onUpdateMycolllectionList={getMyNFTsMethod}
      />
    );
  }

  return (
    <div className={styles.main}>
      <MyCollectionSwitch
        category={category}
        onSetSelectedOption={(cat) => setCategory(cat)}
      />
      {list}
    </div>
  );
};

export default MyCollectionMain;
