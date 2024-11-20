import "./PromotionCard.css";


const PromotionCard = (props) => {

    const {img, time, titel, description} = props
  return (
    <>
      <div className="promotion__card">
        <div>
          <img src={img} alt="" />
        </div>
        <p className="card__time">{time}</p>
        <a href="#" className="promotion__card__titel">
          {titel}
        </a>
        <p className="promotion__card__description">{description}</p>
      </div>
    </>
  );
};

export default PromotionCard;
