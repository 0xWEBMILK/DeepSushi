import RestaurantsButton from "../RestaurantsButton/RestaurantsButton";
import "./RestaurantsSortBar.css";

const RestaurantsSortBar = () => {
  return (
    <>
      <div className="restaurants__sortbar__sort">
        <RestaurantsButton text={"Все"} />
        <RestaurantsButton text={"Открыты сейчас"} />
        <RestaurantsButton text={"Детская комната"} />
        <RestaurantsButton text={"Летняя веранда"} />
        <RestaurantsButton text={"Wi-Fi"} />
        <RestaurantsButton text={"Кинозал"} />
        <RestaurantsButton text={"Банкетный зал"} />
        <RestaurantsButton text={"Парковка"} />
        <RestaurantsButton text={"Банкомат"} />
      </div>
    </>
  );
};

export default RestaurantsSortBar;
