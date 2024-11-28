import headerLocation from "../../../Images/header-location.svg";
import clean from "../../../Images/clean.svg";
import cart from "../../../Images/cart.svg";
import "./Basket.css"

const Basket = () => {
  return (
    <div className="header__basket">
      <div className="header__basket__region">
        <div>
          <img src={headerLocation} alt="location" />
        </div>

        <p className="header__adress__text">Москва и Московская область</p>
      </div>
      <div className="header__basket__clean">
        <a href="#">
          <img src={clean} alt="" />
        </a>
      </div>
      <div className="header__basket__cart">
        <a className="header__basket__cart__link" href="#">
          <img src={cart} alt="" />
          <p className="header__basket__cart__text">Пустая корзина</p>
        </a>
      </div>
    </div>
  );
};

export default Basket;
