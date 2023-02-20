import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./SocialMediaItem.module.css";

const SocialMediaItem = ({ src, link }) => {
  return (
    <li className={styles.item}>
      <a href={link} target="_blank">
        <ImageUI src={'socials/' +src} width="80px" height="80px" />
      </a>
    </li>
  );
};
 
export default SocialMediaItem;
