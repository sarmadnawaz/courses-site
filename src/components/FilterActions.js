import { FilterSelect } from "./FilterSelect";
import { useContext, useEffect, useReducer } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { CoursesContext } from "../contexts/CoursesContext";

const reducer = (state, action) => ({ ...state, ...action });
function FilterActions() {
  const { dispatchQueries } = useContext(CoursesContext);
  const { categories } = useContext(CategoriesContext);
  const [state, setState] = useReducer(reducer, {
    category: null,
    topic: null,
    language: null,
    sortby: null,
  });
  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatchQueries({
      category: state.category,
      topic: state.topic,
      language: state.language,
      sortby: state.sortby,
    });
  }, [state]);

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
