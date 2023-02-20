import { clearUserNFTsCache } from "helpers/api-utils";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { unStake } from "store/stake-actions";
import styles from "./UnstakeAction.module.css";
import classes from "components/general/NFTItem/action/styles.module.css";



const UnstakeAction = ({
  itemId,
  stakeTime,
  contracts,
  onUpdateMycolllectionList,
}) => {
  const account = useSelector((state) => state.wallet.address);
  const dispath = useDispatch();
  const launch = useRef();

  const [stakedTimeLeft, setStakedTimeLeft] = useState(null);

  const getTimeFromDate = (stakeTime) => {
    var now = new Date().getTime();
    var timeleft = stakeTime - now;
    setStakedTimeLeft(timeleft);
  };
  useEffect(() => {
    const countdownTimer = (timestamp) => {
      launch.current = setInterval(() => {
        getTimeFromDate(timestamp);
      }, 1000);
    };
    countdownTimer(Number(stakeTime) * 1000);
  }, []);

  const unstakeHandler = async () => {
    dispath(unStake(contracts.stake, account, itemId)).then((res) => {
      toast.success(res);
      onUpdateMycolllectionList();
      clearUserNFTsCache();
    });
  };

  return (
    <button
      onClick={unstakeHandler}
      disabled={stakedTimeLeft > 0}
      className={classes.action}
    >
      Unstake
    </button>
  );
};

export default UnstakeAction;
