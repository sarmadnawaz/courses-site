import { createContext, useEffect, useState } from "react";
import { getCategories } from "../services/categories";

export const CategoriesContext = createContext([]);

export const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategories(categories);
    })();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
