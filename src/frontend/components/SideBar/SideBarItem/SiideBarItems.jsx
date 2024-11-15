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

import './SideBarItem.css'
import { Link } from "react-router-dom";

const deliveryList = [
    {
      id: 1,
      img: sideBarImgOne,
      text: "Суси и Гунканы",
      alt: "Суси и Гунканы",
    },
    { id: 2, img: sideBarImgTwo, text: "Сасими", alt: "Сасими" },
    { id: 3, img: sideBarImgThree, text: "Роллы", alt: "Роллы" },
    { id: 4, img: sideBarImgFour, text: "Горячие роллы", alt: "Горячие роллы" },
    { id: 5, img: sideBarImgFive, text: "Онигири", alt: "Онигири" },
    { id: 6, img: sideBarImgSix, text: "Сеты", alt: "Сеты" },
    {
      id: 7,
      img: sideBarImgSeven,
      text: "Салаты и Закуски",
      alt: "Салаты и Закуски",
    },
    { id: 8, img: sideBarImgEight, text: "Супы", alt: "Супы" },
    { id: 9, img: sideBarImgNine, text: "Шашлычки", alt: "Шашлычки" },
    { id: 10, img: sideBarImgTen, text: "Горячее", alt: "Горячее" },
    {
      id: 11,
      img: sideBarImgEleven,
      text: "Лапша, Wok & Рис",
      alt: "Лапша, Wok & Рис",
    },
    {
      id: 12,
      img: sideBarImgTwelve,
      text: "Пицца и Бургеры",
      alt: "Пицца и Бургеры",
    },
    { id: 13, img: sideBarImgThirteen, text: "Бенто-ланч", alt: "Бенто-ланч" },
    { id: 14, img: sideBarImgFourteen, text: "Десерты", alt: "Десерты" },
    {
      id: 15,
      img: sideBarImgFifteen,
      text: "Детское меню",
      alt: "Детское меню",
    },
  ];

const SiideBarItems = () => {
  return (
    <ul className="deliveri__menu__list">
      {deliveryList.map((item) => (
        <li key={item.id}>
          <Link className="sidebar__link" to="/menu-dostavki">
            <img src={item.img} alt={item.alt} />
            <p className="sidebar__text">{item.text}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SiideBarItems;
