import React, { useEffect, useRef, useState } from "react";
import styles from "./NFTItemTimer.module.css";

const NFTItemTimer = ({ timerTimestamp }) => {
  const launch = useRef();
  const [timer, setTimer] = useState(null);

  const getTimeFromDate = (timestamp) => {
    var now = new Date().getTime();
    var timeleft = timestamp - now;

    if (timeleft > 0) {
      var days = 0;
      var hours = 0;
      var minutes = 0;
      days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));

      let time = {
        hours: hours,
        minutes: minutes,
        day: days,
      };
      setTimer(time);
    } else {
      setTimer(null);
      clearInterval(launch.current);
    }
  };

  useEffect(() => {
    const countdownTimer = (timestamp) => {
      launch.current = setInterval(() => {
        getTimeFromDate(timestamp);
      }, 1000);
    };
    countdownTimer(Number(timerTimestamp) * 1000);
  }, []);

  return (
    <>
      {timer && (
        <div className={styles.timer}>
          <p className={styles.times}>
            {timer.day}d <span>:</span> {timer.hours}h <span>:</span>{" "}
            {timer.minutes}m{" "}
          </p>
          <p>Staked Time Left</p>
        </div>
      )}
    </>
  );
};

export default NFTItemTimer;
