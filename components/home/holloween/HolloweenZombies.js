import ImageUI from "components/ui/ImageUI";
import React from "react";
import { Figure } from "react-bootstrap";
import styles from "./HolloweenZombies.module.css";

const HolloweenZombies = () => {
  const holloweenZombies = [
    "holloween11.png",
    "holloween8.png",
    "holloween12.png",
  ];
  return (
    <Figure className={styles["items"]}>
      {holloweenZombies.map((item) => (
        <ImageUI
          className={styles.item}
          src={item}
          width="150"
          height="200px"
          key={item}
        />
      ))}
    </Figure>
  );
};

export default HolloweenZombies;
