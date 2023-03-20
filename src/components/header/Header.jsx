import "./header.scss";

import logo from "../../resources/logowhite.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/" title="Logo">
          <img src={logo} alt="Logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
