import YakitoriaPage from "./pages/Yakitoria/YakitoriaPage";
import MenuDostavkiPage from "./pages/MenuDostavki/MenuDostavkiPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Главная страница */}
          <Route index element={<YakitoriaPage />} />
          {/* Страница "Меню Доставки" */}
          <Route path="menu-dostavki" element={<MenuDostavkiPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
