import React, { useEffect, useState } from "react";
import SliderMedia from "./SliderMedia";
import SliderPagination from "./SliderPagination";
import SliderPaginationControllers from "./SliderPaginationControllers";
import styles from "./ViewSlider.module.css";

const ViewSlider = () => {
  const [currentSlide, setcurrentSlide] = useState(1);
  const mediaList = ["game1.jpeg", "game2.jpeg", "game3.jpeg", "game4.jpeg"];
  const [currentMedia, setcurrentMedia] = useState(null);

  const totalItems = mediaList.length;

  useEffect(() => {
    setcurrentMedia(mediaList[currentSlide - 1]);
  }, [mediaList, currentSlide]);

  return (
    <div className={styles.slider}>
      <SliderPaginationControllers
        totalItems={totalItems}
        onChangeSlide={(slide) => setcurrentSlide(slide)}
      >
        <div className={styles.card}>
          <SliderMedia mediaSrc={currentMedia} />
          <SliderPagination
            totalItems={totalItems}
            currentSlide={currentSlide}
            onChangeCurrentSlide={(num) => setcurrentSlide(num + 1)}
          />
        </div>
      </SliderPaginationControllers>
    </div>
  );
};

export default ViewSlider;
