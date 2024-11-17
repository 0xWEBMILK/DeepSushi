import { useState } from "react";
import "./MenuCard.css";

const MenuCard = (props) => {
  const { img, eventImg, titel, description, priceText } = props;
  
  const [count, setCount] = useState(1);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="card">
      <div className="card__images">
        <img className="card__img__event" src={eventImg} alt="" />
        <img src={img} alt="" />
      </div>
      <div className="card__text">
        <h3 className="card__titel">{titel}</h3>
        <p className="card__description">{description}</p>
        <div className="card__price">
          <p className="card__price__text">{priceText * count} руб.</p>
          <div className="card__price__buttons">
            <button className="card__btn" onClick={decrement}>
              -
            </button>
            <p className="card__count">{count}</p>
            <button className="card__btn" onClick={increment}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
