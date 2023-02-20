import React from "react";
import styles from "./style.module.css";

const SpaceshipNFTDetails = ({ level, traits }) => {
  const traitList =
    traits &&
    Object.keys(traits).map((key) => (
      <li key={key}>
        <p>{key}</p>
        <p>{traits[key].join(", ")}</p>
      </li>
    ));

  return (
    <ul className={styles["attributes"]}>
      <li>
        <p>Level</p>
        <p>{level}</p>
      </li>
      {traitList}
    </ul>
  );
};

export default SpaceshipNFTDetails;
