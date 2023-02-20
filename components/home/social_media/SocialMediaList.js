import React from "react";
import SocialMediaItem from "./SocialMediaItem";
import styles from "./SocialMediaList.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const SocialMediaList = ({ socialList }) => {
  return (
    <ul className={styles.list}>
      {socialList.map((item) => (
        <SocialMediaItem src={item.image} key={item.name} link={item.link} />
      ))}
    </ul>
  );
};

export default SocialMediaList;
