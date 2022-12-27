import { useContext, useEffect, useState, useRef } from "react";
import { ExMdChevronRIcon, ExMdChevronLIcon } from "../assests/Icons";
import { FiltersContext } from "../contexts/FiltersProvider";
import renderPageNumbers from "../utilz/renderPageNumbers";

function Pagination({ totalPages = 1, currentPage: activePage = 1 }) {
  const { dispatchFilters } = useContext(FiltersContext);
  const [currentPage, setCurrentPage] = useState(activePage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > totalPages) {
      setCurrentPage(1);
    } else if (pageNumber < 1) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };
  useEffect(() => {
    if (currentPage !== 1) {
      dispatchFilters({ page: currentPage });
    }
  }, [currentPage]);

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        <li className="btn">
          <ExMdChevronLIcon
            onClick={() => handlePageChange(currentPage - 1)}
            className="icon"
          />
        </li>
        {renderPageNumbers(currentPage, totalPages, handlePageChange)}
        <li className="btn">
          <ExMdChevronRIcon
            onClick={() => handlePageChange(currentPage + 1)}
            className="icon"
          />
        </li>
      </ul>
    </div>
  );
}

export { Pagination };
