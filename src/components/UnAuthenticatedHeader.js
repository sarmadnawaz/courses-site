import { SmChevronDownIcon } from "../assests/Icons";
function UnAuthenticatedHeader() {
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
              Books
            </a>
            <SmChevronDownIcon />
          </li>
          <li className="header-user-profile">
            <a className="header-nav-link" href="#">
              Sign out
            </a>
          </li>
          <li>
            <div className="header-user-avatar">
              <img
                title="Micheal Borot"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fa71PWB97dEE_i-Ov2AwofvqMIKAfr0dew&usqp=CAU"
                alt="user-avatar"
              />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { UnAuthenticatedHeader };
