import { createContext, useEffect, useState } from "react";
import { getCourses } from "../services/courses";

export const CoursesContext = createContext([]);

export const CoursesProvider = (props) => {
  const [state, setState] = useState({
    courses: [],
    totalCourses: 0,
  });
  const { courses, totalCourses } = state;
  const [queries, dispatchQueries] = useState({});
  const value = {
    totalCourses,
    courses,
    dispatchQueries,
  };
  useEffect(() => {
    (async () => {
      const { courses, totalCourses } = await getCourses();
      setState({
        courses,
        totalCourses,
      });
    })();
  }, []);
  return (
    <CoursesContext.Provider value={value}>
      {props.children}
    </CoursesContext.Provider>
  );
};
