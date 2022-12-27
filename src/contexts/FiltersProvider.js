import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const FiltersContext = createContext({});

const reducer = (state, action) => ({ ...state, ...action });

export const FiltersProvider = (props) => {
  const navigate = useNavigate();
  const [filters, dispatchFilters] = useReducer(reducer, {});
  const value = {
    filters,
    dispatchFilters,
  };

  useEffect(() => {
    let filtersArr = [];
    Object.keys(filters).forEach((query) => {
      if (filters[query]) {
        filtersArr.push(`${query}=${filters[query]}`);
      }
    });
    if (filtersArr.length) {
      navigate(`/explore?${filtersArr.join("&")}`);
    }
  }, [filters]);

  return (
    <FiltersContext.Provider value={value}>
      {props.children}
    </FiltersContext.Provider>
  );
};
