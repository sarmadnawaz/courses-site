import { useEffect, useReducer } from "react";
import { getCourses } from "../services/courses";
import { CourseCard } from "./CourseCard";
import { Pagination } from "./Pagination";
import { numbertoPages } from "../utilz/convertNumbertoPages";
import { useQueries } from "../utilz/hooks/useQueries";
import { asyncReducer } from "../utilz/reducers/asyncReducer";

function CoursesList() {
  const [state, dispatch] = useReducer(asyncReducer, {
    courses: [],
    totalCourses: 0,
    status: "idle",
  });
  const { status, courses, totalCourses } = state;
  const { queries } = useQueries();

  useEffect(() => {
    (async () => {
      const { courses, totalCourses } = await getCourses(queries);
      dispatch({ status: "success", courses, totalCourses });
    })();
  }, [queries]);

  return (
    <div className="courses-list-container">
      {status === "idle" && <p>Loader</p>}
      {status === "success" && (
        <>
          <h3 className="sub-heading">{totalCourses} Courses Found</h3>
          <ul className="courses-list">
            {courses.map((course) => {
              return <CourseCard courseData={course} />;
            })}
          </ul>
          <Pagination
            totalPages={numbertoPages(totalCourses, 10)}
            currentPage={queries.page ? queries.page : 1}
          />
        </>
      )}
    </div>
  );
}

export { CoursesList };
