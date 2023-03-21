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
          <nav></nav>
          <button role="switch" className="header__nav-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a className="nav__button" href="/">
              Team
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
