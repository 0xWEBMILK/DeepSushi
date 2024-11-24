import "./RestaurantsItem.css"

const RestaurantsItem = ( {text} ) => {
  return (
    <>
      <li className="restaurants__item">
        <a className="restaurants__link" href="#">{text}</a>
      </li>
    </>
  );
};

export default RestaurantsItem;
