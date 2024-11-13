import { useState } from "react";
import closeBtn from "../../../Images/sidebarBtn.svg";

import "./SideBarInfo.css";

const SideBarInfo = () => {
  const [activeTab, setActiveTab] = useState("Категории");
  return (
    <>
      <div className="deliveri__menu__info">
        <div className="deliveri__menu__button">
          <h3 className="deliveri__titel">МЕНЮ ДОСТАВКИ</h3>
          <button className="deliveri__menu__btn">
            <img src={closeBtn} alt="закрыть" />
          </button>
        </div>
        <div className="delivery__menu__text">
          <a
            className={`delivery__menu__link ${
              activeTab === "Категории" ? "active" : ""
            }`}
            href="#"
            onClick={() => setActiveTab("Категории")}
          >
            Категории
          </a>
          <a
            className={`delivery__menu__link ${
              activeTab === "Ингредиенты" ? "active" : ""
            }`}
            href="#"
            onClick={() => setActiveTab("Ингредиенты")}
          >
            Ингредиенты
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBarInfo;
