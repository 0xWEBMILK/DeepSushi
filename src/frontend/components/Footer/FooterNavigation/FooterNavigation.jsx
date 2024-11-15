import logo from "../../../Images/Logo.svg";
import GooglePlay from "../../../Images/footer-1.png";
import AppStore from "../../../Images/footer-2.png";
import AppGallery from "../../../Images/footer-3.png";
import QR from "../../../Images/footer-4.png";

import "./FooterNavigation.css";
import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <br />
      <p className="footer__nav__text">
        Доставка суши — онлайн сервис заказа суши и других блюд в Москве и
        <br />
        Московской области.
      </p>
      <br />
      <p className="footer__nav__text">Прием заказов: c 10:00 до 4:45</p> <br />
      <p className="footer__nav__text">Мобильное приложение</p> <br />
      <div className="footer__mobile__app">
        <div className="footer__mobile__apps">
          <a className="footer__mobile__link" href="#">
            <img src={GooglePlay} alt="GooglePlay" />
          </a>
          <a className="footer__mobile__link" href="#">
            <img src={AppStore} alt="AppStore" />
          </a>
          <a className="footer__mobile__link" href="#">
            <img src={AppGallery} alt="AppGallery" />
          </a>
        </div>
        <div className="footer__mobile__qr">
          <img src={QR} alt="QR" />
        </div>
      </div>
    </>
  );
};

export default FooterNavigation;
