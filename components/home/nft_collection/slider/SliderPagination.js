import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from "./SliderPagination.module.css";

const SliderPagination = ({ pageNumber, onSetCurrentPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [timeout, settimeout] = useState(null);
  const totalItems = 4;

  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [pageNumber]);

  function changePageHandler(amount) {
    let newPage = currentPage + amount;
    if (newPage > totalItems) {
      setCurrentPage(1);
    } else if (newPage === 0) {
      setCurrentPage(4);
    } else {
      setCurrentPage(newPage);
    }
  }

  useEffect(() => {
    onSetCurrentPage(currentPage);

    clearTimeout(timeout);
    settimeout(
      setTimeout(() => {
        changePageHandler(1);
      }, 12000)
    );
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {Array.from(Array(totalItems), (e, i) => {
          return (
            <li
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`${styles.item} ${
                currentPage === i + 1 && styles.active
              }`}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>

      <ul className={styles.arrows}>
        <button onClick={() => changePageHandler(-1)}>
          <MdArrowBackIosNew className={styles.icon} />
        </button>
        <button onClick={() => changePageHandler(1)}>
          <MdArrowForwardIos className={styles.icon} />
        </button>
      </ul>
    </div>
  );
};

export default SliderPagination;
