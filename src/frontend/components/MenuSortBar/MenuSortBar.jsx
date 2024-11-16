import "./MenuSortBar.css";
import MenuCard from "../MenuCard/MenuCard";

import plus from "../../Images/plus.svg";
import sort from "../../Images/sort.svg";
import reset from "../../Images/reset.svg";
import rollMaldivi from "../../Images/rollMaldivi.png";
import imgNew from "../../Images/eventImg-1.svg";

const MenuSortBar = (props) => {
  const titel = props.titel;

  return (
    <>
      <div className="container">
        <section className="rolls">
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
          {/*----------------------------- КОСТЫЛИИИИ --------------------*/}
          <div className="container__grid">
            <MenuCard
              img={rollMaldivi}
              eventImg={imgNew}
              titel="Мальдивы"
              description="ролл с лососем и копченым угрем, сыр, авокадо, свежая клубника, трюфельное масло, ..."
              priceText="687"
            />
            <MenuCard
              img={rollMaldivi}
              eventImg={imgNew}
              titel="Мальдивы"
              description="ролл с лососем и копченым угрем, сыр, авокадо, свежая клубника, трюфельное масло, ..."
              priceText="687"
            />
          </div>
          {/*----------------------------- КОСТЫЛИИИИ --------------------*/}
        </section>
      </div>
    </>
  );
};

export default MenuSortBar;
