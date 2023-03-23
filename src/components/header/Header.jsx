import "./header.scss";

import logo from "../../resources/logowhite.svg";
import Cases from "../cases/cases";
// import Cases from "../cases/cases";

const Header = (props) => {
  const { data } = props;
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
                <span>cases</span>
                <i className="icon icon-chevron-down"></i>
                </a>
                <Cases
                  data={data?.home_cases}
                  caseLinkText={data?.link_text}
                  caseLinkUrl={data?.link_url}
                  classWrap={'nav__sub-menu'}
                  itemClass={'nav__sub-item'}
                />

              </li>
              <li className="nav__item">
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
