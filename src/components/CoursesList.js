import { useContext } from "react";
import { CoursesContext } from "../contexts/CoursesContext";
import { CourseCard } from "./CourseCard";
import { Pagination } from "./Pagination";

function CoursesList() {
  const { totalCourses, courses } = useContext(CoursesContext);
  return (
    <div className="courses-list-container">
      <h3 className="sub-heading">{totalCourses} Courses Found</h3>
      <ul className="courses-list">
        {courses.map((course) => {
          return <CourseCard courseData={course} />;
        })}
      </ul>
      <Pagination />
    </div>
  );
}

export { CoursesList };
