import { useState, useEffect } from "react";
import { getCategories } from "../services/getCategories";

function CategoriesSection() {
  const [categories, setCategories] = useState(new Array(150).fill(1));
  const handleImageLoad = (e) => {
    e.target
      .closest(".category-img-container")
      .children[1].classList.add("hidden");
    e.target.classList.remove("hidden");
  };
  useEffect(() => {
    // getCategories().then((categories) => setCategories(categories));
  }, []);
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="sub-heading">Courses Categories</h2>
        <div className="categories-section-main">
          {categories.map(({ title, name }) => (
            <div className="category-img-container">
              <div className="img-container">
                <img
                  className="hidden"
                  title={title}
                  src={`http://127.0.0.1:3000/api/images/${name}?size=80x80`}
                  alt={`${title} icon`}
                  onLoad={handleImageLoad}
                />
              </div>
              <div className="img-placeholder"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CategoriesSection };
