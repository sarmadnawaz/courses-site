import { useContext, useEffect, useReducer, useRef } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { FiltersContext } from "../contexts/FiltersProvider";
import { FilterSelect } from "./FilterSelect";

const reducer = (state, action) => ({ ...state, ...action });

function FilterActions() {
  const { categories } = useContext(CategoriesContext);
  const { dispatchFilters } = useContext(FiltersContext);

  const [queries, dispatchQueries] = useReducer(reducer, {});

  const handleChange = (e) => {
    dispatchQueries({ [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatchFilters(queries);
  }, [queries, dispatchFilters]);

  return (
    <div className="filter-container">
      <h2 className="sub-heading">Filter</h2>
      <div className="filter-actions">
        <FilterSelect
          options={categories}
          onChange={handleChange}
          name="category"
          label="Category"
        />
        <FilterSelect onChange={handleChange} name="topic" label="Topic" />
        <FilterSelect
          options={[
            { name: "", title: "Both" },
            { name: "english", title: "English" },
            { name: "russian", title: "Russian" },
          ]}
          onChange={handleChange}
          name="language"
          label="Language"
        />
        <FilterSelect onChange={handleChange} name="sortby" label="Source" />
      </div>
    </div>
  );
}

export { FilterActions };
