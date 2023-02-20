import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./SliderMedia.module.css";

const SliderMedia = ({ mediaSrc }) => {
  let src = "upcomming_events/" + mediaSrc;
  return (
    <ImageUI className={styles.media} src={src} height="250" width="400" />
  );
};

export default SliderMedia;
