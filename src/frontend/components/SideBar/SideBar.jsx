import SideBarInfo from "./SideBarInfo/SideBarInfo";
import SiideBarItems from "./SideBarItem/SiideBarItems";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="container">
        <div className="deliveri__menu">
          <SideBarInfo />
          <SiideBarItems />
        </div>
      </div>
    </>
  );
};

export default SideBar;
