
import "./MenuSortBar.css";
import MenuCard from "../MenuCard/MenuCard";

import plus from "../../Images/plus.svg";
import sort from "../../Images/sort.svg";
import reset from "../../Images/reset.svg";
import imgNew from "../../Images/eventImg-1.svg";

import { useEffect, useState } from "react";

const MenuSortBar = (props) => {
  const { titel } = props;
  const [sushiItems, setSushiItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/api/v1/")
      .then((response) => {
        console.log(response); // Inspect the response
        return response.json();
      })
      .then((data) => setSushiItems(data));
  }, []);

  return (
    <div className="container"> 

      <h1 className="rolls__titel">{titel}</h1>
      <div className="rools__sort">
        <div className="rools__sort__left">
          <div className="rools__sort_filter">
            <button className="rools__sort_filter__btn">
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
      
    </div>
   
  );
};

export default MenuSortBar;
