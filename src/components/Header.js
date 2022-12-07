import { SmChevronDownIcon } from "../assests/Icons";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo-container">
        <h1>Seeklo.</h1>
      </a>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li>
            <a className="header-nav-link" href="#">
              Courses
            </a>
            <SmChevronDownIcon />
          </li>
          <li>
            <a className="header-nav-link" href="#">
              Sources
            </a>
          </li>
          <li>
            <a className="header-nav-link" href="#">
              Books
            </a>
            <SmChevronDownIcon />
          </li>
          <li>
            <a className="header-nav-link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="btn header-nav-link nav-cta" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
