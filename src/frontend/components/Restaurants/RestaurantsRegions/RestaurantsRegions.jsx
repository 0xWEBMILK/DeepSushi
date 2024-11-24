import "./RestaurantsRegions.css"

const RestaurantsRegions = () => {
  return (
    <div className="restaurants__sortbar__regions">
      <select className="restaurants__sortbar__select" name="regions">
        <option className="restaurants__sortbar__option" value="1">
          Москва и Московская область
        </option>
        <option className="restaurants__sortbar__option" value="2">
          Россия и СНГ
        </option>
      </select>
    </div>
  );
};

export default RestaurantsRegions;
