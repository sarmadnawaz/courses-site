import { useContext, useState } from "react";
import { FiltersContext } from "../contexts/FiltersProvider";
import { ExMdSearchIcon } from "../assests/Icons";

function SearchBar() {
  const { dispatchFilters } = useContext(FiltersContext);
  const [search, setSearch] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatchFilters({ search });
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
