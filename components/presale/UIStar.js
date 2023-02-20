import ImageUI from "components/ui/ImageUI";
import React from "react";
import { Figure } from "react-bootstrap";
import styles from "./UIStar.module.css";

const UIStar = () => {
  return (
    <>
      <Figure className={styles["star-container-1"]}>
        <ImageUI src="star-6.png" width="20" height="20" />
      </Figure>

      <Figure className={styles["star-container-2"]}>
        <ImageUI src="star-4.png" width="30" height="40 " />
        <ImageUI src="star-1.png" width="15" height="15" />
      </Figure>
    </>
  );
};

export default UIStar;
