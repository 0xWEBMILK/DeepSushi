import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

import "./Layout.css";
import Present from "../Main/Present/Present";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <SideBar />
      <Present />
      <Footer />
    </>
  );
};

export default Layout;
