import React, { useState } from "react";
import styles from "./SliderPagination.module.css";

const SliderPagination = ({totalItems,currentSlide}) => {

  return (
    <ul className={styles.pagination}>
      {Array.from(Array(totalItems), (e, i) => {
        return (
          <li
            key={i}
            className={`${styles.item} ${
              currentSlide === i + 1 && styles.active
            }`}
          >
          </li>
        );
      })}
    </ul>
  );
};

export default SliderPagination;
