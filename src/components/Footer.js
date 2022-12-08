function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-description">
            Copyright © 2023 by Seeklo, All rights reserved.
          </div>
          <div className="footer-contact">
            Contact us: <span>info@seeklo.com</span>
          </div>
          <ul className="footer-nav-link">
            <li>
              <a>Twitter</a>
            </li>
            <li>
              <a>Facebook</a>
            </li>
            <li>
              <a>Medium</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Footer };
