import React from "react";
import { Link } from "react-router-dom";
import "../css/Pagination.css";

export default function Pagination({ handlePagination, currentPage }) {
  let addedClass = "button ";
  addedClass += currentPage == 1 ? "unclickable-page" : "page";
  return (
    <div className="pagination">
      <Link className={addedClass} onClick={() => handlePagination(0)}>
        <p>Prev</p>
      </Link>
      <Link
        className="button unclickable-page index-page"
        onClick={() => handlePagination(0)}
      >
        <p>{currentPage}</p>
      </Link>
      <Link className="button page" onClick={() => handlePagination(1)}>
        <p>Next</p>
      </Link>
    </div>
  );
}
