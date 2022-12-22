import { heroSection } from "../assests/content/sections-data";

function HeroSection() {
  const {
    heading,
    paragraph,
    instructorNumbers,
    instructorsText,
    instructorsImages,
    mainImage,
  } = heroSection;
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-text-box">
          <h1 className="heading-primary">{heading}</h1>
          <p className="para-primary">{paragraph}</p>
          <a
            href="#subscription-section"
            className="nav-link nav-link--outline"
          >
            Get free Trial
          </a>
          <div className="courses-sources">
            <div className="courses-sources-imgs">
              {instructorsImages.map((img) => (
                <img src={img} />
              ))}
            </div>
            <p className="sources-text">
              <span>{instructorNumbers}+</span> {instructorsText}
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img className="hero-img" src={mainImage} />
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
