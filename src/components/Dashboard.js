import { CourseCard } from "./CourseCard";
function DashBoard() {
  return (
    <div className="dashboard-main">
      <div className="container">
        <div className="dashboard-container">
          <section className="user-courses-section">
            <div className="user-courses-section-header">
              <h3 className="sub-heading">Courses To do list</h3>
            </div>
            <div className="user-courses-section-content">
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
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
            {/* <div className="user-courses-empty-card">
              <h2>No course selected Yet</h2>
              <a className="btn btn--outline" a="#">
                Browse Courses
              </a>
            </div> */}
          </section>
        </div>
      </div>
    </div>
  );
}

export { DashBoard };
