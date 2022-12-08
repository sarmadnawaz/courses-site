import categories from "../assests/dev-data/categories";
function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="container categories-section-container">
        <div className="categories-section-header">
        <h2 className="sub-heading">Courses Categories</h2>
        </div>
        <div className="categories-section-main">
          {categories.map(({ imageURL, name }) => (
            <div>
              <img title={name} src={imageURL} alt={`${name} icon`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CategoriesSection };
