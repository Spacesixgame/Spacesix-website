import React from "react";
import styles from "./UIStars.module.css";
import Image from "components/ui/ImageUI";
import { Figure } from "react-bootstrap";

const UIStars = () => {
  return (
    <>
      <div
        className={styles["star-container"] + " " + styles["star1-container"]}
      >
        <Image
          src="star-1.png"
          className={styles["star1"]}
          width="15px"
          height="20px"
        />
      </div>

      <div
        className={styles["star-container"] + " " + styles["star2-container"]}
      >
        <Image
          src="star-2.png"
          className={styles["star1"]}
          width="15px"
          height="20"
        />
      </div>

      <Figure
        className={styles["star-container"] + " " + styles["star3-container"]}
      >
        <Image
          className={styles["star-container"]}
          src="star-3.png"
          height="40px"
          width="30px"
        />
      </Figure>

      <div
        className={styles["star-container"] + " " + styles["star4-container"]}
      >
        <Image
          src="star-4.png"
          className={styles["star4"]}
          width="30"
          height="40"
        />
      </div>
    </>
  );
};

export default UIStars;
