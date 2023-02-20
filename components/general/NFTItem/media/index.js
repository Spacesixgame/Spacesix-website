import { baseApiURL } from "config/globalConfig";
import React from "react";
import MediaImage from "./MediaImage";
import MediaVideo from "./MediaVideo";
import styles from "./styles.module.css";

const NFTItemMedia = ({ src, image, soldout, className, autoplay }) => {
  var media;
  if (src) {
    let mediaSrc = baseApiURL + "static/shop/" + src;
    media = <MediaVideo media={mediaSrc} autoplay={autoplay} />;
  } else {
    let mediaSrc = baseApiURL + "static/shop/" + image;
    media = <MediaImage media={mediaSrc} />;
  }

  return (
    <div
      className={`${styles["media"]} ${
        soldout ? styles["soldout"] : ""
      } ${className}`}
    >
      {media}
      {soldout && <span className={styles["soldout-badget"]}> Sold Out</span>}
    </div>
  );
};

export default NFTItemMedia;