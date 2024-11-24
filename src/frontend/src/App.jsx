import YakitoriaPage from "./pages/YakitoriaPage/YakitoriaPage";
import DeliveryMenuSushiPage from "./pages/DeliveryMenuSushiPage/DeliveryMenuSushiPage";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import DeliveryMenuSashimiPage from "./pages/DeliveryMenuSashimiPage/DeliveryMenuSashimiPage";
import DeliveryMenuRollyPage from "./pages/DeliveryMenuRollyPage/DeliveryMenuRollyPage";
import DeliveryMenuHotRollsPage from "./pages/DeliveryMenuHotRollsPage/DeliveryMenuHotRollsPage";
import DeliveryMenuOnigiriPage from "./pages/DeliveryMenuOnigiriPage/DeliveryMenuOnigiriPage";
import DeliveryMenuSetPage from "./pages/DeliveryMenuSetPage/DeliveryMenuSetPage";
import DeliveryMenuSaladPage from "./pages/DeliveryMenuSaladPage/DeliveryMenuSaladPage";
import DeliveryMenuSoupPage from "./pages/DeliveryMenuSoupPage/DeliveryMenuSoupPage";
import DeliveryMenuShashlikPage from "./pages/DeliveryMenuShashlikPage/DeliveryMenuShashlikPage";
import DeliveryMenuFishPage from "./pages/DeliveryMenuFishPage/DeliveryMenuFishPage";
import DeliveryMenuNoodlesPage from "./pages/DeliveryMenuNoodlesPage/DeliveryMenuNoodlesPage";
import DeliveryMenuPizzaPage from "./pages/DeliveryMenuPizzaPage/DeliveryMenuPizzaPage";
import DeliveryMenuBentoLunchPage from "./pages/DeliveryMenuBentoLunchPage/DeliveryMenuBentoLunchPage";
import DeliveryMenuDessertPage from "./pages/DeliveryMenuDessertPage/DeliveryMenuDessertPage";
import DeliveryMenuBabyFoodPage from "./pages/DeliveryMenuBabyFoodPage/DeliveryMenuBabyFoodPage";
import PromotionPage from "./pages/PromotionPage/PromotionPage";
import RestaurantsPage from "./pages/RestourantsPage/RestaurantsPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<YakitoriaPage />} />
          <Route path="*" element={<YakitoriaPage />} />
          <Route path="menu-dostavki/sushi" element={<DeliveryMenuSushiPage />} />
          <Route path="menu-dostavki/sashimi" element={<DeliveryMenuSashimiPage />} />
          <Route path="menu-dostavki/rolly" element={<DeliveryMenuRollyPage />} />
          <Route path="menu-dostavki/goryachie-rolly" element={<DeliveryMenuHotRollsPage />} />
          <Route path="menu-dostavki/onigiri" element={<DeliveryMenuOnigiriPage />} />
          <Route path="menu-dostavki/sety" element={<DeliveryMenuSetPage />} />
          <Route path="menu-dostavki/salaty" element={<DeliveryMenuSaladPage />} />
          <Route path="menu-dostavki/supy" element={<DeliveryMenuSoupPage />} />
          <Route path="menu-dostavki/shashlychki" element={<DeliveryMenuShashlikPage />} />
          <Route path="menu-dostavki/moreprodukty-i-ryba" element={<DeliveryMenuFishPage />} />
          <Route path="menu-dostavki/lapsha" element={<DeliveryMenuNoodlesPage />} />
          <Route path="menu-dostavki/pitstsa" element={<DeliveryMenuPizzaPage />} />
          <Route path="menu-dostavki/bento-lanch" element={<DeliveryMenuBentoLunchPage />} />
          <Route path="menu-dostavki/deserty" element={<DeliveryMenuDessertPage />} />
          <Route path="menu-dostavki/detskoe-menyu" element={<DeliveryMenuBabyFoodPage />} />
          <Route path="/news" element={<PromotionPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
