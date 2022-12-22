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
            <a className="nav-link" href="#">
              Courses
            </a>
            <SmChevronDownIcon />
          </li>
          <li>
            <a className="nav-link" href="#">
              Books
            </a>
            <SmChevronDownIcon />
          </li>
          <li>
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="nav-link" href="#pricing-section">
              Sign in
            </a>
          </li>
          <li>
            <a className="btn btn--outline" href="#pricing-section">
              View Plans
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
