import React from "react";
import paginationStyles from "./pagination.module.css";

export default function Pagination() {
  return (
    <div className={paginationStyles.backgroup}>
      <ul className={paginationStyles.ul}>
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
      </ul>
    </div>
  );
}
