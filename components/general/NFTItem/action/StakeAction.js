import { Spinner } from "@chakra-ui/react";
import { clearUserNFTsCache } from "helpers/api-utils";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { approveNFTItem, checkGetApproved, stake } from "store/stake-actions";

const StakeAction = ({
  tokenId,
  stakeTime,
  contracts,
  stakeAddress,
  onUpdateMycolllectionList,
}) => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.wallet.address);
  const [isLoading, setisLoading] = useState(false);

  clearUserNFTsCache()

  const checkApprove = async () => {
    await dispatch(checkGetApproved(contracts.mint, account, tokenId))
      .then(async (res) => {
        setisLoading(false);
        if (res == "0x0000000000000000000000000000000000000000") {
          await dispatch(
            approveNFTItem(contracts.mint, account, stakeAddress, tokenId)
          );
        }
      })
      .catch((err) => {
        console.log("err");
        toast.error("Approve Rejected!");
        setisLoading(false);
      });
  };

  const stakeNFT = async () => {
    await dispatch(stake(contracts.stake, account, tokenId, stakeTime))
      .then((res) => {
        clearUserNFTsCache();
        toast.success(res);
        onUpdateMycolllectionList();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const stakeHandler = async () => {
    setisLoading(true);
    await checkApprove();
    await stakeNFT();
  };

  return (
    <>
      <button className={`primary-btn text-dark py-2 px-3`} onClick={stakeHandler}>
        {isLoading ? <Spinner size={"sm"}></Spinner> : "Stake"}
      </button>
    </>
  );
};

export default StakeAction;
