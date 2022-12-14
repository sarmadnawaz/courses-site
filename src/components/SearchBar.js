import { ExMdSearchIcon } from "../assests/Icons";

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-bar" placeholder="Search for courses" />
      <ExMdSearchIcon className="search-icon" />
    </div>
  );
}

export { SearchBar };
