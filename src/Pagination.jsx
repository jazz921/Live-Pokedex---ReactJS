import React from "react";

const Pagination = ({ nextButton, prevButton, prevURL }) => {
  return (
    <div>
      {prevURL !== null ? (
        <button className="btn" onClick={prevButton}>
          PREVIOUS
        </button>
      ) : (
        ""
      )}
      <button className="btn" onClick={nextButton}>
        NEXT
      </button>
    </div>
  );
};

export default Pagination;
