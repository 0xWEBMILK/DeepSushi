import Background from "./Background/Background";
import Present from "./Present/Present";

import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Background
        titel={"25 лет держим палочки!"}
        description={"Давайте отмечать вместе!"}
      />
      <Present />
    </main>
  );
};

export default Main;
