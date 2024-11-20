import React, { useEffect, useState } from "react";
import PromotionCard from "../../../components/PromotionCard/PromotionCard";
import "./PromotionPage.css";

const PromotionPage = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/api/v1/promotion") 
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPromotions(data);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <section className="promotion">
      <h2 className="promotion__titel">Новости и акции</h2>
      <div className="promotion__grid">
        {promotions.map((promotion, index) => (
          <PromotionCard
            key={index}
            img={promotion.file_path}
            time={promotion.date}
            titel={promotion.title}
            description={promotion.description}
          />
        ))}
      </div>
    </section>
  );
};

export default PromotionPage;
