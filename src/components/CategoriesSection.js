import categories from "../assests/dev-data/categories";
function CategoriesSection() {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="categories-section-header">Courses Categories</h2>
        <div className="logos">
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
