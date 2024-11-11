import "./Navigation.css";

const Navigation = () => {
  const menuItems = [
    { id: 1, text: "Акции", href: "#" },
    { id: 2, text: "Рестораны", href: "#" },
    { id: 3, text: "О доставке", href: "#" },
    { id: 4, text: "Мальдивы ждать не будут!", href: "#", highlighted: true },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item.id} className="navbar__item">
            <a className="navbar__link" href={item.href}>
              {item.highlighted ? <span>{item.text}</span> : item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
