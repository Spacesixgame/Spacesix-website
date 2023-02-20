import React from "react";
import Slider from "./ViewSlider";
import SliderDetail from "./ViewDetail";
import styles from './styles.module.css'

const View = () => {
  return (
    <div className={styles.view}>
      <Slider />
      <SliderDetail />
    </div>
  );
};

export default View;
