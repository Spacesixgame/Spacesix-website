import React from "react";
import styles from "./UpcommingEventsTitle.module.css";
import ImageUI from "components/ui/ImageUI";

const UpcommingEventsTitle = () => {
  return (
    <>
      Upcoming
      <span className={styles.span}>
        Events
        <ImageUI
          src="highlight-bling-line.png"
          className={styles["image"]}
          width="30px"
          height="30px"
        />
      </span>
    </>
  );
};

export default UpcommingEventsTitle;
