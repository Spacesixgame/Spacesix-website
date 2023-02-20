import { clearUserNFTsCache } from "helpers/api-utils";
import { fromWei, roundNumber, toWei } from "modules/web3Wei";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  approveContract,
  getAllowence,
  getBalanceOf,
} from "store/contract-actions";
import { getBalance } from "store/wallet-actions";
import { calculateBNBPrice, mintNFT } from "store/mintnft-actions";
import Web3 from "web3";
import useBUSDContract from "hooks/use-busdContract";
import { Spinner } from "@chakra-ui/react";
import useContract from "hooks/use-contract";
import styles from "./styles.module.css";

const MintAction = ({
  // price,
  tokenId,
  // onUpdateList,
  number,
  selectedType,
  contractPrice,
  category,
  packageId,
  disableMint,
}) => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.wallet.address);
  const [isLoading, setIsLoading] = useState(false);

  const BUSDContract = useBUSDContract();

  const { getMintContract, getMintAddress } = useContract();

  const clearCache = () => {
    clearUserNFTsCache().then((res) => {
      console.log("Clear Cache Was Successfull !");
    });
  };

  const mintNftHandler = async () => {

    let { mintContract } = await getMintContract(category);
    let { mintAddress } = await getMintAddress(category);
    console.log(mintContract);

    setIsLoading(true);
    if (!account) {
      toast.error("Connect Your Wallet First !");
      setIsLoading(false);
      return;
    }

    var balance;
    var totalNFTPrice;
    let BNBPrice = 0;

    if (selectedType === "1") {
      let allowence = await dispatch(
        getAllowence(BUSDContract, account, mintAddress)
      );
      setIsLoading(false);

      if (Number(allowence) < Number(number * contractPrice)) {
        await dispatch(
          approveContract(
            BUSDContract,
            toWei("1000000000", "ether"),
            account,
            mintAddress
          )
        )
          .then((res) => {
            toast.success(res);
            return;
          })
          .catch((err) => {
            toast.error(err);
            return;
          });
        setIsLoading(false);
        return;
      }
      balance = await dispatch(getBalanceOf(BUSDContract, account));
      totalNFTPrice = contractPrice * number;
    } else if (selectedType === "2") {
      if (packageId) {
        BNBPrice = await dispatch(
          calculateBNBPrice(mintContract, tokenId, packageId)
        );
      } else {
        BNBPrice = await dispatch(
          calculateBNBPrice(mintContract, tokenId, number)
        );
      }

      balance = await dispatch(getBalance(account));
      totalNFTPrice = BNBPrice;
    }

    if (Number(balance) < Number(totalNFTPrice)) {
      let shortcoming = Number(totalNFTPrice) - Number(balance);
      toast.error(
        "The balance is " +
          roundNumber(fromWei(shortcoming.toString())) +
          " less"
      );
      setIsLoading(false);
      return;
    }

    let BN = Web3.utils.BN;
    let bigintContractPrice = new BN(contractPrice);
    let bigintNumber = new BN(number);
    let totalBUSDPrice = bigintContractPrice.mul(bigintNumber);

    await dispatch(
      mintNFT(
        mintContract,
        account,
        tokenId,
        selectedType, //type
        fromWei(totalBUSDPrice),
        number,
        BNBPrice,
        packageId
      )
    )
      .then((res) => {
        toast.success(res);
        setTimeout(() => {
          clearCache();
          // onUpdateList();
        }, 2000);
        setTimeout(() => {
          clearCache();
        }, 20000);
      })
      .catch((err) => {
        toast.error("Mint Has Error !");
      });
    setIsLoading(false);
  };

  var acitonContent;
  if (isLoading) {
    acitonContent = <Spinner></Spinner>;
  } else if (category === "planets") {
    acitonContent = "Only Partnerships";
  } else {
    acitonContent = "Buy";
  }

  return (
    <button
      className={styles["action"]}
      onClick={mintNftHandler}
      disabled={isLoading || disableMint}
    >
      {/* {category === "planets" ? "Only Partnerships" : "Buy"} */}
      {acitonContent}
    </button>
  );
};

export default MintAction;
