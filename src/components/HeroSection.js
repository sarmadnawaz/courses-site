import images from "../assests/dev-data/sources-imgs";
import heroSectionImage from "../assests/dev-data/bg-img";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Future proof your career with computer science and IT
          </h1>
          <p className="hero-description">
            Welcome to our website. We have a vast collection of lastest and up
            to date free courses and books for learning programming and related
            technology. This is the best platform to choose to become a
            developer so get started with your prespective courses and enjoy
            awesome learning experience free of cost
          </p>
          <a href="#" className="btn">
            Get free Trial
          </a>
          <div className="courses-sources">
            <div className="courses-sources-imgs">
              {images.map((img) => (
                <img src={img} />
              ))}
            </div>
            <p className="sources-text">
              <span>150+</span> experienced courses instructors
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img className="hero-img" src={heroSectionImage} />
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
