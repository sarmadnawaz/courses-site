import { useReducer } from "react";
import { asyncReducer } from "./reducers/asyncReducer";

const useFilters = ({ filters }) => {
    const [filters, setFilters] = useReducer(asyncReducer, {
        
    })
    let filtersArr = [];
    Object.keys(filters).forEach((query) => {
      filtersArr.push(`${query}=${filters[query]}`);
    });
    window.location.assign(`/explore?${filtersArr.join("&")}`);
}