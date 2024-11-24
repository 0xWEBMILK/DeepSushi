import "./RestaurantsButton.css"

const RestaurantsButton = ( {text} ) => {
  return (
    <>
      <button className="restaurants__sortbar__sort__btn">{text}</button>
    </>
  );
};

export default RestaurantsButton;
