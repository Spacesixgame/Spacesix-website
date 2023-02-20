import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./PartnershipsItem.module.css";

const PartnershipsItem = ({ link, src }) => {
  return (
    <li className={styles.item}>
    <a href={link} target="_blank">
      <ImageUI
        className={styles["blur-image"]}
        src={'partnerships/' +src}
        width="200"
        height="40"
      />
      <ImageUI
        className={styles["normal-image"]}
        src={'partnerships/' +src}
        width="200"
        height="40"
      />
    </a>
  </li>
  );
};

export default PartnershipsItem;
