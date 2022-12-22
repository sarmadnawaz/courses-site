import { createContext, useEffect, useReducer, useState } from "react";
import { getCourses } from "../services/courses";

export const CoursesContext = createContext([]);

function reducer(state, action) {
  return { ...state, ...action };
}

export const CoursesProvider = (props) => {
  const [state, setState] = useState({
    courses: [],
    totalCourses: 0,
  });
  const { courses, totalCourses } = state;
  const [queries, dispatchQueries] = useReducer(reducer, {
    search: null,
    category: null,
    language: null,
    page: 2,
  });
  console.log(queries);
  const value = {
    totalCourses,
    courses,
    dispatchQueries,
  };
  useEffect(() => {
    (async () => {
      const { courses, totalCourses } = await getCourses({ ...queries });
      setState({
        courses,
        totalCourses,
      });
    })();
  }, [queries]);
  return (
    <CoursesContext.Provider value={value}>
      {props.children}
    </CoursesContext.Provider>
  );
};
