import "./Navigation.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  const menuItems = [
    { id: 1, text: "Акции", href: "news/" },
    { id: 2, text: "Рестораны", href: "#" },
    { id: 3, text: "О доставке", href: "#" },
    { id: 4, text: "Мальдивы ждать не будут!", href: "#", highlighted: true },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        {menuItems.map((item) => (
          <li key={item.id} className="navbar__item">
            <Link className="navbar__link" to={item.href}>
              {item.highlighted ? <span>{item.text}</span> : item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
