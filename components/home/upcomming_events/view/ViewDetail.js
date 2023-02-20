import React from "react";
import styles from "./ViewDetail.module.css";

const ViewDetail = () => {
  return (
    <div className={styles.detail}>
      <h5 className={styles.title}> Game play teaser</h5>
      <p className={styles.description}>
        Ready to watch our new gameplay teaser? in the upcoming quarter, we will
        be holding a great event where you can watch our new gameplay teaser and
        discover the different parts of the game.
      </p>
    </div>
  );
};

export default ViewDetail;
