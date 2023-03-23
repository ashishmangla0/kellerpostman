import "./header.scss";

import logo from "../../resources/logowhite.svg";
// import Cases from "../cases/cases";

const Header = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" title="Logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="header__right">
          <nav aria-label="main menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="" tabIndex={0}>
                  team
                </a>
              </li>
              <li className="nav__item nav__item--hassubmenu">
                <a
                  className="nav__link dropdown"
                  href=""
                  tabIndex={0}
                  aria-expanded={false}
                >
                  cases
                </a>
                {/* <Cases data={data}/> */}
                <ul className="dropdown__list"></ul>
              </li>
              <li>
                <a
                  className="nav__link nav__link--button button"
                  href=""
                  tabIndex={0}
                >
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
