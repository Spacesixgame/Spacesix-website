import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from "./SliderPaginationControllers.module.css";

const SliderPaginationControllers = ({ children,totalItems,onChangeSlide }) => {
  const [currentSlide, setcurrentSlide] = useState(1)
  const [timeout, settimeout] = useState(null);

  function changePageHandler(amount) {
    let newPage = currentSlide + amount;
    if (newPage > totalItems) {
      setcurrentSlide(1);
    } else if (newPage === 0) {
      setcurrentSlide(totalItems);
    } else {
      setcurrentSlide(newPage);
    }
  }

  useEffect(() => {
    onChangeSlide(currentSlide);

    clearTimeout(timeout);
    settimeout(
      setTimeout(() => {
        changePageHandler(1);
      }, 3000)
    );
  }, [currentSlide]);

  useEffect(() => {
    setcurrentSlide(1);
  }, []);
  
  return (
    <>
      <button className={styles.controller} onClick={() => changePageHandler(-1)}>
        <MdArrowBackIosNew className={styles.icon} />
      </button>

      {children}

      <button className={styles.controller} onClick={() => changePageHandler(1)}>
        <MdArrowForwardIos className={styles.icon} />
      </button>
    </>
  );
};

export default SliderPaginationControllers;
