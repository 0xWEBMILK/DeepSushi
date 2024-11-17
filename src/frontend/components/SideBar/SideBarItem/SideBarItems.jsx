import sideBarImgOne from "../../../Images/sidebar-1.png";
import sideBarImgTwo from "../../../Images/sidebar-2.png";
import sideBarImgThree from "../../../Images/sidebar-3.png";
import sideBarImgFour from "../../../Images/sidebar-4.png";
import sideBarImgFive from "../../../Images/sidebar-5.png";
import sideBarImgSix from "../../../Images/sidebar-6.png";
import sideBarImgSeven from "../../../Images/sidebar-7.png";
import sideBarImgEight from "../../../Images/sidebar-8.png";
import sideBarImgNine from "../../../Images/sidebar-9.png";
import sideBarImgTen from "../../../Images/sidebar-10.png";
import sideBarImgEleven from "../../../Images/sidebar-11.png";
import sideBarImgTwelve from "../../../Images/sidebar-12.png";
import sideBarImgThirteen from "../../../Images/sidebar-13.png";
import sideBarImgFourteen from "../../../Images/sidebar-14.png";
import sideBarImgFifteen from "../../../Images/sidebar-15.png";

import "./SideBarItem.css";

import { Link } from "react-router-dom";

const deliveryList = [
  {
    id: 1,
    img: sideBarImgOne,
    text: "Суси и Гунканы",
    alt: "Суси и Гунканы",
    to: "menu-dostavki/sushi",
  },
  {
    id: 2,
    img: sideBarImgTwo,
    text: "Сасими",
    alt: "Сасими",
    to: "menu-dostavki/sashimi",
  },
  {
    id: 3,
    img: sideBarImgThree,
    text: "Роллы",
    alt: "Роллы",
    to: "menu-dostavki/rolly",
  },
  {
    id: 4,
    img: sideBarImgFour,
    text: "Горячие роллы",
    alt: "Горячие роллы",
    to: "menu-dostavki/goryachie-rolly",
  },
  {
    id: 5,
    img: sideBarImgFive,
    text: "Онигири",
    alt: "Онигири",
    to: "menu-dostavki/onigiri",
  },
  {
    id: 6,
    img: sideBarImgSix,
    text: "Сеты",
    alt: "Сеты",
    to: "menu-dostavki/sety",
  },
  {
    id: 7,
    img: sideBarImgSeven,
    text: "Салаты и Закуски",
    alt: "Салаты и Закуски",
    to: "menu-dostavki/salaty",
  },
  {
    id: 8,
    img: sideBarImgEight,
    text: "Супы",
    alt: "Супы",
    to: "menu-dostavki/supy",
  },
  {
    id: 9,
    img: sideBarImgNine,
    text: "Шашлычки",
    alt: "Шашлычки",
    to: "menu-dostavki/shashlychki",
  },
  {
    id: 10,
    img: sideBarImgTen,
    text: "Горячее",
    alt: "Горячее",
    to: "menu-dostavki/moreprodukty-i-ryba",
  },
  {
    id: 11,
    img: sideBarImgEleven,
    text: "Лапша, Wok & Рис",
    alt: "Лапша, Wok & Рис",
    to: "menu-dostavki/lapsha",
  },
  {
    id: 12,
    img: sideBarImgTwelve,
    text: "Пицца и Бургеры",
    alt: "Пицца и Бургеры",
    to: "menu-dostavki/pitstsa",
  },
  {
    id: 13,
    img: sideBarImgThirteen,
    text: "Бенто-ланч",
    alt: "Бенто-ланч",
    to: "menu-dostavki/bento-lanch",
  },
  {
    id: 14,
    img: sideBarImgFourteen,
    text: "Десерты",
    alt: "Десерты",
    to: "menu-dostavki/deserty",
  },
  {
    id: 15,
    img: sideBarImgFifteen,
    text: "Детское меню",
    alt: "Детское меню",
    to: "menu-dostavki/detskoe-menyu",
  },
];

const SideBarItems = () => {
  return (
    <ul className="deliveri__menu__list">
      {deliveryList.map((item) => (
        <li key={item.id}>
          <Link className="sidebar__link" to={item.to}>
            <img src={item.img} alt={item.alt} />
            <p className="sidebar__text">{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBarItems;
