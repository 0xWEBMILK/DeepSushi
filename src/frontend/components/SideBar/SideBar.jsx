import SideBarInfo from "./SideBarInfo/SideBarInfo";
import SideBarItems from "./SideBarItem/SideBarItems";
import "./SideBar.css";

const SideBar = () => {
  return (
    <>
      <div className="container">
        <div className="deliveri__menu">
          <SideBarInfo />
          <SideBarItems />
        </div>
      </div>
    </>
  );
};

export default SideBar;
