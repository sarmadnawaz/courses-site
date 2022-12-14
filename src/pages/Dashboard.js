import { useState } from "react";
import { DashBoardHeader } from "../components/DashBoardHeader";
import { FilterActions } from "../components/FilterActions";
import { CoursesList } from "../components/CoursesList";

function DashBoard() {
  const [isTodoListOpen, setIsTodoListOpen] = useState(false);
  return (
    <div>
      <DashBoardHeader />
      <main className="dashboard-page-main">
        <div className="container">
          <ul className="top-nav">
            <li
              onClick={() => setIsTodoListOpen(false)}
              className={`${isTodoListOpen ? " " : "active"}`}
            >
              Discover
            </li>
            <li
              onClick={() => setIsTodoListOpen(true)}
              className={`${isTodoListOpen ? "active" : ""}`}
            >
              Todo List
            </li>
          </ul>
          <FilterActions />
        </div>
        <CoursesList />
      </main>
    </div>
  );
}
export { DashBoard };
