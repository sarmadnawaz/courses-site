export const numbertoPages = (totalNumber = 0, numberPerPage = 0) => {
  let pages;
  if (totalNumber < numberPerPage) {
    pages = 1;
  } else if (totalNumber % numberPerPage === 0) {
    pages = totalNumber / numberPerPage;
  } else if (totalNumber % numberPerPage !== 0) {
    pages = Math.floor(totalNumber / numberPerPage) + 1;
  }
  return pages;
};
