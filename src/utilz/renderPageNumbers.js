const renderPageNumbers = (currentPage, totalPages, handlePageChange) => {
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
   return pageNumbers.map((number) => {
    if (
      number === 1 ||
      number === totalPages ||
      (number >= currentPage - 2 && number <= currentPage + 2)
    ) {
      return (
        <li key={number} className={number === currentPage ? "active" : ""}>
          <a onClick={() => handlePageChange(number)}>{number}</a>
        </li>
      );
    }
    if (number === currentPage - 3 || number === currentPage + 3) {
      return (
        <li key={number} className="dots">
          ...
        </li>
      );
    }
    return null;
  });
};

export default renderPageNumbers;
