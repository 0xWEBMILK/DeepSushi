import "./MenuSortBar.css";

import plus from "../../../Images/plus.svg";
import sort from "../../../Images/sort.svg";
import reset from "../../../Images/reset.svg";

const MenuSortBar = () => {
  return (
    <>
      <div className="container">
        <section className="rolls">
          <h1 className="rolls__titel">Роллы</h1>
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
        </section>
      </div>
    </>
  );
};

export default MenuSortBar;
