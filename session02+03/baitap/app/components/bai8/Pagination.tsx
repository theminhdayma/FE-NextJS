"use client";
import React, { useState } from "react";
import paginationStyles from "./pagination.module.css";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < 20) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={paginationStyles.backgroup}>
      <div className={paginationStyles.ul}>
        <button
          onClick={handlePrev}
          className={`${paginationStyles.paginationButton}  `}
        >
          Prev
        </button>
        {totalPages.map((page, index) => (
          <button
            key={index}
            className={` ${
              currentPage === page ? paginationStyles.li : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className={paginationStyles.paginationButton}
        >
          Next
        </button>
      </div>

      {/* <ul className={paginationStyles.ul}>
        <li className={paginationStyles.arow}>
          <span className="material-symbols-outlined">keyboard_backspace</span>
          <span>Prev</span>
        </li>
        <li className={paginationStyles.li}>1</li>
        <li className={paginationStyles.li}>2</li>
        <li className={paginationStyles.three}>3</li>
        <li className={paginationStyles.li}>4</li>
        <li className={paginationStyles.li}>5</li>
        <li className={paginationStyles.li}>6</li>
        <li className={paginationStyles.li}>7</li>
        <li className={paginationStyles.li}>...</li>
        <li className={paginationStyles.li}>20</li>
        <li className={paginationStyles.arow}>
          <span>Next</span>
          <span className="material-symbols-outlined">east</span>
        </li>
      </ul> */}
    </div>
  );
}
