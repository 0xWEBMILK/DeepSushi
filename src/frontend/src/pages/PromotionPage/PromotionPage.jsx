import React, { useEffect, useState } from "react";
import PromotionCard from "../../../components/PromotionCard/PromotionCard";
import "./PromotionPage.css";

const PromotionPage = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/promotions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((data) => {
        setPromotions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="promotion__loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="promotion__error">{error}</div>;
  }

  return (
    <section className="promotion">
      <h2 className="promotion__titel">Новости и акции</h2>
      <div className="promotion__grid">
        {promotions.map((promo) => (
          <PromotionCard
            key={promo.id}
            img={promo.file_path}
            time={promo.date}
            titel={promo.title}
            description={promo.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PromotionPage;
