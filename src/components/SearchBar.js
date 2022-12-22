import { useState, useContext } from "react";
import { ExMdSearchIcon } from "../assests/Icons";
import { CoursesContext } from "../contexts/CoursesContext";

function SearchBar() {
  const [search, setSearch] = useState("");
  const { dispatchQueries } = useContext(CoursesContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatchQueries({ search: search.toLowerCase() });
  };
  const handleInputChange = (e) => setSearch(e.target.value);
  return (
    <div className="search-bar-container">
      <form onSubmit={handleFormSubmit}>
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          className="search-bar"
          placeholder="Search for courses"
        />
      </form>
      <ExMdSearchIcon className="search-icon" />
    </div>
  );
}

export { SearchBar };
