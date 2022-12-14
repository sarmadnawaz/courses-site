import { CategoryPreviewCard } from "../components/CategoryPreviewCard";
import categories from "../assests/dev-data/categories";
import topics from "../assests/dev-data/topics";
import { CourseCard } from "../components/CourseCard";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
function Discover() {
  return (
    <div className="discover-page">
      {/* <div className="discover-categories-section-container">
        <section className="discover-categories-section">
          <div className="categories-section-header">
            <h2 className="sub-heading">Categories</h2>
          </div>
          <div className="categories-by-topic-container">
            <h3 className="categories-header">Topics based categories</h3>
            <div className="categories-by-topic">
              {topics.map(({ name }) => {
                return <CategoryPreviewCard title={name} />;
              })}
            </div>
          </div>
          <div className="categories-by-skill-container">
            <h3 className="categories-header">Skilled based categories</h3>
            <div className="categories-by-skill">
              {categories.map(({ imageURL, name }) => {
                return <CategoryPreviewCard imgSrc={imageURL} title={name} />;
              })}
            </div>
          </div>
        </section>
      </div> */}
      <div className="discover-page-container">
        <div className="discover-page-main">
          <div className="filter-container">
            <ul className="filter-container-nav">
              <li className="active">
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Books</a>
              </li>
            </ul>
            <h3 className="filter-container-header">Filter</h3>
            <form className="filter-container-form">
              <Input
                type="text"
                label="Search"
                placeHolder="Search by keywords"
              />
              <Select label="Topic" />
              <Select label="Category" />
              <Select
                label="Language"
                options={[
                  { value: "english", title: "english" },
                  { value: "any", title: "Any" },
                ]}
              />
              <Select
                label="Rating"
                options={[{ value: "highestRated", title: "highest Rated" }]}
              />
              <Select
                label="Course Status"
                options={[
                  { value: "free", title: "free" },
                  { value: "standard", title: "standard" },
                  { value: "premium", title: "premium" },
                ]}
              />
              <button type="submit" className="btn btn--outline">Search</button>
            </form>
          </div>
          <div className="discover-page-main-list">
            <h3 className="sub-heading">998 Courses Found</h3>
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
        </div>
      </div>
    </div>
  );
}

export { Discover };
