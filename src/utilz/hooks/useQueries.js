import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useQueries = () => {
  const [queries, setQueries] = useState({});
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let queries = {};
    searchParams.forEach((value, key) => {
      queries[key] = value;
    });
    setQueries(queries);
  }, [location]);

  return { queries };
};
