import PromotionCard from "../../../components/PromotionCard/PromotionCard";
import promotionImgOne from "../../../Images/promotion-1.png";
import "./PromotionPage.css";

const PromotionPage = () => {
  return (
    <>
      <section className="promotion">
        <h2 className="promotion__titel">Новости и акции</h2>
        <div className="promotion__grid">
          <PromotionCard
            img={promotionImgOne}
            time="15 МАЯ 2024"
            titel="-25% на доставку"
            description="Скидка на первый заказ"
          />
          <PromotionCard
            img={promotionImgOne}
            time="14 ноября 2024"
            titel="Бенто остров стал другим!"
            description="Обновленное детское меню"
          />
          <PromotionCard
            img={promotionImgOne}
            time="12 ноября 2024"
            titel="Особенное предложение"
            description="Меню к 25-летию «Якитории»"
          />
          <PromotionCard
            img={promotionImgOne}
            time="12 ноября 2024"
            titel="Особенное предложение"
            description="Меню к 25-летию «Якитории»"
          />
          <PromotionCard
            img={promotionImgOne}
            time="12 ноября 2024"
            titel="Особенное предложение"
            description="Меню к 25-летию «Якитории»"
          />
          <PromotionCard
            img={promotionImgOne}
            time="12 ноября 2024"
            titel="Особенное предложение"
            description="Меню к 25-летию «Якитории»"
          />
        </div>
      </section>
    </>
  );
};

export default PromotionPage;
