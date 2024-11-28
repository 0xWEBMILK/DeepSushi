import "./FooterNavigationLegal.css";

const FooterNavigationLegal = () => {
  const listItem = [
    { id: 1, text: "Политика конфиденциальности" },
    { id: 2, text: "Пользовательское соглашение" },
    { id: 3, text: "Положение по обработке персональных данных" },
    { id: 4, text: "Пользовательское соглашение по программе лояльности" },
  ];
  return (
    <>
      <h3 className="footer__legal__titel footer__item__text">Юридическая информация</h3>
      <ul className="footer__item__legal__list footer__item__text">
        {listItem.map((item) => (
          <li key={item.id}>
            <a className="footer__item__legal__list__link" href="#">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterNavigationLegal;
