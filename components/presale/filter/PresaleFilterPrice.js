import CustomRangerSlider from "components/ui/CustomRangerSlider";
import React, { useEffect, useState } from "react";
import styles from "./PresaleFilterPrice.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const PresaleFilterPrice = ({ selectedType, onSetPriceRangeFilter }) => {
  const [minPrice, setminPrice] = useState(90);
  const [maxPrice, setmaxPrice] = useState(100);

  const [title, setTitle] = useState("");

  const changePriceRangeHandler = (range) => {
    let data = {
      minPrice: range[0],
      maxPrice: range[1],
    };
    onSetPriceRangeFilter(data);
  };

  useEffect(() => {
    changePriceRangeHandler(["", ""]);
    const titleUpper =
      selectedType.charAt(0).toUpperCase() + selectedType.slice(1);
    setTitle(titleUpper);

    if (selectedType === "lands") {
      setminPrice(90);
      setmaxPrice(1500);
    } else if (selectedType === "planets") {
      setminPrice(16000);
      setmaxPrice(50000);
    } else if (!selectedType) {
      setminPrice(20);
      setmaxPrice(50000);
    } else {
      setminPrice(20);
      setmaxPrice(800);
    }
  }, [selectedType]);

  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Price :</h5>

      <div className={styles.slider}>
        <h5>{title}</h5>
        <CustomRangerSlider
          key="lands-slider"
          min={minPrice}
          max={maxPrice}
          minTitle={minPrice + " BUSD"}
          maxTitle={maxPrice + " BUSD"}
          onChangeRangeHandler={(data) => changePriceRangeHandler(data)}
        />
      </div>
    </div>
  );
};

export default PresaleFilterPrice;
