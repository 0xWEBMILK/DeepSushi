import { useState } from "react";
import "./RestaurantsTab.css"

const RestaurantsTab = () => {
  const [activeTab, setActiveTab] = useState("Списком");

  return (
    <div className="restaurants__choose">
      <a
        className={`restaurants__choose__link ${
          activeTab === "Списком" ? "active" : ""
        }`}
        href="#"
        onClick={() => setActiveTab("Списком")}
      >
        Списком
      </a>
      <a
        className={`restaurants__choose__link ${
          activeTab === "На карте" ? "active" : ""
        }`}
        href="#"
        onClick={() => setActiveTab("На карте")}
      >
        На карте
      </a>
    </div>
  );
};

export default RestaurantsTab;
