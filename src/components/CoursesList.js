import { CourseCard } from "./CourseCard";
import { Pagination } from "./Pagination";

function CoursesList() {
  return (
    <div className="courses-list-container">
      <h3 className="sub-heading">909 Courses Found</h3>
      <ul className="courses-list">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </ul>
      <Pagination />
    </div>
  );
}

export { CoursesList };
