import { AuthenticatedHeader } from "../components/AuthenticatedHeader";
import { FilterActions } from "../components/FilterActions";
import { CoursesList } from "../components/CoursesList";
import { FiltersProvider } from "../contexts/FiltersProvider";

export function Explore() {
  return (
    <FiltersProvider>
      <div className="explore-page">
        <AuthenticatedHeader />
        <main className="explore-page-main">
          <div className="container">
            <FilterActions />
          </div>
          <CoursesList />
        </main>
      </div>
    </FiltersProvider>
  );
}
