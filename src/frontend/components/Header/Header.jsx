import logo from "../../Images/Logo.svg";

import Navigation from "./Navigation/Navigation";
import Basket from "./Basket/Basket";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="logo__logo">
            <a href="#">
              <img className="header__logo__img" src={logo} alt="logo" />
            </a>
          </div>

          <Navigation />
          <Basket />
        </div>
      </div>
    </header>
  );
};

export default Header;
