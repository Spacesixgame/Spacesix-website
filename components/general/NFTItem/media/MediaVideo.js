import React, { useEffect, useRef, useState } from "react";
import styles from "./MediaVideo.module.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const MediaVideo = ({ autoplay, media }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // useEffect(() => {
  //   if (videoRef) {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   }
  // }, [media]);

  useEffect(() => {
    if (autoplay) {
      setPlaying(true);
    }
  }, []);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const videoEndHandler = () => {
    videoHandler("pause");
  };

  return (
    <>
      <video
        width="280"
        height="350"
        ref={videoRef}
        preload="auto"
        muted
        autoPlay={autoplay}
        type="video/mp4"
        onEnded={videoEndHandler}
      >
        <source src={media} />
      </video>
      <div className={styles["play-controls__container"]}>
        {!playing ? (
          <button
            onClick={() => videoHandler("play")}
            className={styles["play-button"]}
          >
            <BsFillPlayFill className={styles.icon} />
          </button>
        ) : (
          <button
            onClick={() => videoHandler("pause")}
            className={styles["pause-button"]}
            type={"button"}
          >
            <BsPauseFill className={styles.pauseIcon} />
          </button>
        )}
      </div>
    </>
  );
};

export default MediaVideo;
