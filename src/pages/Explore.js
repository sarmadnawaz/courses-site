import { useState } from "react";
import { AuthenticatedHeader } from "../components/AuthenticatedHeader";
import { FilterActions } from "../components/FilterActions";
import { CoursesList } from "../components/CoursesList";

function Explore() {
  return (
    <div className="explore-page">
      <AuthenticatedHeader />
      <main className="explore-page-main">
        <div className="container">
          <FilterActions />
        </div>
        <CoursesList />
      </main>
    </div>
  );
}
export { Explore };
