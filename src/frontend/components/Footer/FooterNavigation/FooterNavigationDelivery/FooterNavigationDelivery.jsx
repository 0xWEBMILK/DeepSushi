import mobileVersion from "../../../../Images/footer-5.png";

import "./FooterNavigationDelivery.css";

const FooterNavigationDelivery = () => {
  const listItems = [
    { id: 1, text: "Условия доставки" },
    { id: 2, text: "Адреса ресторанов", className: "margin" },
    { id: 3, text: "Программа лояльности GoodFoodClub", className: "margin2" },
    { id: 4, img: mobileVersion }, // Элемент с изображением
  ];
  return (
    <>
      <h3 className="footer__delivery__titel footer__item__text">Доставка</h3>
      <ul className="footer__list__delivery__list footer__item__text">
        {listItems.map((item) => (
          <li key={item.id} className={item.className || ""}>
            <a className="footer__item__delivery__list__link" href="#">
              {item.img ? (
                <img src={item.img} alt="мобильная версия" />
              ) : (
                item.text
              )}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterNavigationDelivery;
