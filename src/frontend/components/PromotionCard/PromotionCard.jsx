import "./PromotionCard.css";

const PromotionCard = ({ img, time, titel, description }) => {
  return (
    <div className="promotion__card">
      <div className="promotion__card__image-wrapper">
        <img
          src={img}
          alt={titel}
          className="promotion__card__image"
        />
      </div>
      <p className="card__time">{time}</p>
      <a href="#" className="promotion__card__titel">
        {titel}
      </a>
      <p className="promotion__card__description">
        {description}
      </p>
    </div>
  );
};

export default PromotionCard;
