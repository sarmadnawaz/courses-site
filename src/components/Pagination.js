import { useEffect, useState } from "react";
import { ExMdChevronRIcon, ExMdChevronLIcon } from "../assests/Icons";
import renderPageNumbers from "../utilz/renderPageNumbers";

function Pagination({
  totalPages = 1,
  currentPage: activePage = 1,
  onPageChangehandler = () => {},
}) {
  const [currentPage, setCurrentPage] = useState(activePage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > totalPages) {
      setCurrentPage(1);
    } else if (pageNumber <= 1) {
      setCurrentPage(totalPages);
    } else setCurrentPage(pageNumber);
  };

  useEffect(() => {
    onPageChangehandler(currentPage);
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
