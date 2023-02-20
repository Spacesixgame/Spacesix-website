import React from "react";
import styles from "./UIStar.module.css";
import ImageUI from "components/ui/ImageUI";

const UIStar = () => {
  return (
    <>
      <figure className={styles["star-container"]}>
        <ImageUI src="star-5.png" width="30px" height="25px" />
      </figure>
    </>
  );
};

export default UIStar;
