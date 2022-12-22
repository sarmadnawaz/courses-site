import { useEffect, useState } from "react";
import { CourseCard } from "./CourseCard";
import { Pagination } from "./Pagination";
import { getCourses } from "../services/getCourses";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  console.log(courses)
  useEffect(() => {
    getCourses("reactjs").then((courses) => {
      setCourses(courses);
    });
  }, []);
  return (
    <div className="courses-list-container">
      <h3 className="sub-heading">909 Courses Found</h3>
      <ul className="courses-list">
        {courses.map((course) => {
          return <CourseCard courseData={course}/>
        })}
      </ul>
      <Pagination />
    </div>
  );
}

export { CoursesList };
