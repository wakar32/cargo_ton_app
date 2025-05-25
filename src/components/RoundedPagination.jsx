// DotPagination.js
import React from "react";
import "./RoundedPagination.css"; // custom styles here

const RoundedPagination = ({ totalPages, currentPage, onPageChange }) => {
  const dots = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="d-flex justify-content-center mt-4 gap-2">
      {dots.map((page) => (
        <button
          key={page}
          className={`dot ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
          aria-label={`Go to page ${page}`}
        />
      ))}
    </div>
  );
};

export default RoundedPagination;
