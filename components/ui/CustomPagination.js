import React, { useEffect, useState } from "react";
import styles from "./CustomPagination.module.css";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ itemsCount, onChangeCurrentPageHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);
  const pagesCount = Math.ceil(itemsCount / recordsPerPage);

  const isPaginationShown = pagesCount > 1;
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;

  useEffect(() => {
    if (itemsCount === 0) {
      setCurrentPage(1);
    }
  }, [itemsCount]);

  const changePageNumberHandler = (newPageNumber) => {
    if (newPageNumber > pageNumbers.length) {
      return;
    } else if (newPageNumber < 1) {
      return;
    }
    setCurrentPage(newPageNumber);
    onChangeCurrentPageHandler(newPageNumber);
  };

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Pagination.Item
          className={styles["page-item"]}
          key={pageNumber}
          onClick={() => changePageNumberHandler(pageNumber)}
          active={pageNumber === currentPage}
        >
          <p> {pageNumber}</p>
        </Pagination.Item>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <Pagination.Ellipsis key={pageNumber} className="muted" />;
    }

    return null;
  });

  return (
    <>
      {isPaginationShown && (
        <Pagination className={styles["cusutom-pagination"]}>
          <Pagination.Prev
            className={styles["page-action"]}
            onClick={() => changePageNumberHandler(currentPage - 1)}
            disabled={isCurrentPageFirst}
          />
          {pageNumbers}
          <Pagination.Next
            className={styles["page-action"]}
            onClick={() => changePageNumberHandler(currentPage + 1)}
            disabled={isCurrentPageLast}
          />
        </Pagination>
      )}
    </>
  );
};

export default CustomPagination;
