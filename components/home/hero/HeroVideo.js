import React, { useState } from "react";
import styles from "./HeroVideo.module.css";

const HeroVideo = ({ onVideoEnding }) => {
  const [ended, setEnded] = useState(false);
  const onVideoEndHandler = () => {
    setEnded(true);

    setTimeout(() => {
      onVideoEnding();
    }, 500);
  };

  return (
    <div
      className={`${styles["hero-video__container"]} ${
        ended ? styles["hide"] : ""
      }`}
    >
      <video
        key="hero-video"
        className={styles["hero-video"]}
        muted
        autoPlay
        preload="auto"
        onEnded={onVideoEndHandler}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HeroVideo;
