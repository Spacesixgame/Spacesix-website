import { Spinner } from "@chakra-ui/react";
import ImageUI from "components/ui/ImageUI";
import useContract from "hooks/use-contract";
import { fromWei } from "modules/web3Wei";
import React, { useState } from "react";
import { Button, Figure } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { BiRefresh } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { calculateBNBPrice } from "store/mintnft-actions";
import styles from "./NFTItemPriceBNB.module.css";

const NFTItemPriceBNB = ({
  tokenId,
  howMany,
  selectedType,
  onSelectActionType,
  category
}) => {
  const [BNBPrice, setBNBPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { getMintContract } = useContract();

  const getBNBPriceHandler = async () => {
    const {mintContract} = await getMintContract(category);

    return await dispatch(
      calculateBNBPrice(mintContract, tokenId, howMany)
    ).then((res) => {
      return res;
    });
  };

  const showBNBPrice = async () => {
    setIsLoading(true);
    if(howMany < 1){
      toast.error("Can't show the price !")
      setIsLoading(false);
      return
    }
    let price = await getBNBPriceHandler();
    if (price) {
      setBNBPrice(price);
      setIsLoading(false);
    }
  };

  const choseBNBHandler = async () => {
    onSelectActionType("2", 0);
    let price = await getBNBPriceHandler();
    onSelectActionType("2", price);
  };

  return (
    <div
      className={`${styles.container} ${
        selectedType == 2 ? styles["active"] : ""
      }`}
    >
      <div className={styles["logo"]} onClick={choseBNBHandler}>
        <Figure className={styles.figure}>
          <ImageUI src={"BNB.png"} width="30px" height="30px" />
        </Figure>
        <p>BNB</p>
      </div>

      <div className={styles["price-value"]}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {BNBPrice ? (
              <div className={styles["bnb-price"]}>
                <p className={styles["bnb-value"]}>
                  {fromWei(BNBPrice, "ether")} BNB
                </p>
                <button className={styles.refresher} onClick={showBNBPrice}>
                  <BiRefresh className={styles.icon} />
                </button>
              </div>
            ) : (
              <Button onClick={showBNBPrice} className={styles.action}>
                Show Price
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NFTItemPriceBNB;
