import RestaurantsRegions from "../../../components/Restaurants/RestaurantsRegions/RestaurantsRegions";
import RestaurantsSortBar from "../../../components/Restaurants/RestaurantsSortBar/RestaurantsSortBar";
import RestaurantsTab from "../../../components/Restaurants/RestaurantsTab/RestaurantsTab";
import RestaurantsList from "../../../components/Restaurants/RestaurantsList/RestaurantsList";
import "./RestourantsPage.css";

const RestaurantsPage = () => {
  return (
    <>
      <section className="restaurants">
        <div className="container">
          <h1 className="restaurants__titel">Рестораны</h1>
          <RestaurantsTab />
          <div className="restaurants__sortbar">
            <RestaurantsRegions />
            <RestaurantsSortBar />
          </div>
          <div className="restaurants__list">
            <RestaurantsList />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default RestaurantsPage;
