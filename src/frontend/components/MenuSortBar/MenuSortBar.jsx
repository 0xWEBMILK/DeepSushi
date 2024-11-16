import React, { useEffect, useState } from "react";
import "./MenuSortBar.css";
import MenuCard from "../MenuCard/MenuCard";

import plus from "../../Images/plus.svg";
import sort from "../../Images/sort.svg";
import reset from "../../Images/reset.svg";
import imgNew from "../../Images/eventImg-1.svg";

const MenuSortBar = (props) => {
  const { title } = props;
  const [sushiItems, setSushiItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/")
      .then((response) => {
        console.log(response); // Inspect the response
        return response.json();
      })
      .then((data) => setSushiItems(data))
  }, []);

  return (
    <div className="container">
      <section className="rolls">
        <h1 className="rolls__title">{title}</h1>
        <div className="rolls__sort">
          <div className="rolls__sort__left">
            <div className="rolls__sort_filter">
              <button className="rolls__sort_filter__btn">
                <img src={plus} alt="фильтр" />
                Фильтр
              </button>
            </div>
            <div className="rolls__sort__sort">
              <a className="rolls__sort__sort__link" href="#">
                Сортировать по цене
                <img src={sort} alt="Сортировка" />
              </a>
            </div>
          </div>

          <div className="rolls__sort__reset">
            <a className="rolls__sort__reset__link" href="#">
              <img src={reset} alt="Сбросить фильтры" />
              Сбросить фильтры
            </a>
          </div>
        </div>
        <div className="container__grid">
          {sushiItems.map((item) => (
            <MenuCard
              key={item.id}
              img={item.file_path}
              eventImg={imgNew}
              title={item.title}
              description={item.description}
              priceText={item.price.toString()}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuSortBar;
