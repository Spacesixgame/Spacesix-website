import Image from "components/ui/ImageUI";
import React from "react";
import styles from "./UpcommingEventsItem.module.css";

const UpcommingEventsItem = ({ title, dscrb, image }) => {
  const src = "upcomming_events/" + image;
  return (
    <div className={styles["item"]}>
      <div className={styles["image-container"]}>
        {/* {src.includes("mp4") ? (
          <video width="300" height="300" autoPlay>
            <source src={src} type="video/mp4" />
          </video>
        ) : ( */}
          <Image
            width="400"
            height="320"
            className={styles["image-item"]}
            src={src}
          />
        {/* )} */}
      </div>

      <div className={styles["item-details"]}>
        <p className={styles["title"]}>{title}</p>
        <p className={styles["description"]}>{dscrb}</p>
      </div>
    </div>
  );
};

export default UpcommingEventsItem;
