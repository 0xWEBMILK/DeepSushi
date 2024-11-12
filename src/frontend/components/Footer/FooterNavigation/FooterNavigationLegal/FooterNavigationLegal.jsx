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
      <ul className="footer__item__legal__list">
        <h3 className="footer__legal__titel">Юридическая информация</h3>

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
