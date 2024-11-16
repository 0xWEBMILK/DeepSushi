import Background from "./Background/Background";
import Present from "./Present/Present";

import "./Main.css";

const Main = () => {
  return (
    <>
      <Background title={"25 лет держим палочки!"} description={"Давайте отмечать вместе!"} />
      <Present />
    </>
  );
};

export default Main;
