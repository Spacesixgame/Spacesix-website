import ImageUI from "components/ui/ImageUI";
import React from "react";
import styles from "./UIStar.module.css";

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
