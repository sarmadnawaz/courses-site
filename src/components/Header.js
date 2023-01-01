import { SmChevronDownIcon, ExMdBarsIcon } from "../assests/Icons";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="#">
          <h1>Seeklo.</h1>
        </a>
      </div>
      <div className="navigation">
        <input type="checkbox" className="navigation-checkbox" id="navigation-toggle" />
        <label for="navigation-toggle" className="navigation-toggle">
          <ExMdBarsIcon className="menu-icon" />
        </label>
        <div className="navigation-background"></div>
        <nav className="navigation-nav">
          <ul className="navigation-list">
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
              <a className="nav-link" href="#pricing-section">
                View Plans
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
