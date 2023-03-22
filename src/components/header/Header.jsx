import "./header.scss";

import logo from "../../resources/logowhite.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" title="Logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header__right">
          <nav>
            <ul>
              <li>
              <a className="nav__link" href="">
                  free case evaluation
                </a>
                </li>
              <li>
                <div className="nav__link dropdown">
                <a className="nav__link" href="">
                  free case evaluation
                </a>
                <ul>
                  
                </ul>
                </div>

              </li>
              <li>
                <a className="nav__link nav__link--button button" href="">
                  free case evaluation
                </a>
              </li>
            </ul>
          </nav>
          <button role="switch" className="header__nav-button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
