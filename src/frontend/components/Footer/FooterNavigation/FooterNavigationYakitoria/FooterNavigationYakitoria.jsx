import "./FooterNavigationYakitoria.css";

const FooterNavigationYakitoria = () => {
  const List = [
    { id: 1, text: "О нас" },
    { id: 2, text: "Новости и акции" },
    { id: 3, text: "Меню ресторанов" },
    { id: 4, text: "Детям" },
    { id: 5, text: "Мальдивы ждать не будут!", color: "red" },
    { id: 6, text: "Якитория Помогает" },
    { id: 7, text: "Обратная связь" },
    { id: 8, text: "Сотрудничество" },
    { id: 9, text: "Франчайзинг" },
  ];
  return (
    <>
      <h3 className="footer__item__titel footer__item__text">Якитория</h3> <br />
      <ul className="footer__item__yakitoria__list footer__item__text">
        {List.map((item) => (
          <li key={item.id}>
            <a className="footer__item__yakitoria__list__link" href="#">
              {item.color ? <span>{item.text}</span> : item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterNavigationYakitoria;
