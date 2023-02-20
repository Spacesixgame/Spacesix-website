import React from "react";
import PartnershipsItem from "./PartnershipsItem";
import styles from "./PartnershipsList.module.css";
import {Player} from "@lottiefiles/react-lottie-player";

const PartnershipsList = ({ partnershipsList }) => {
  return (
    <ul className={styles["list"]}>
      {partnershipsList.map((item) => (
        <PartnershipsItem key={item.link} link={item.link} src={item.image} />
      ))}
    </ul>
  );
};

export default PartnershipsList;
