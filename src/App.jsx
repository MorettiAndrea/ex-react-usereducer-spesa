// react import

import { BrowserRouter, Routes, Route } from "react-router-dom";

// my paths
import paths from "./data/paths";

// pages
import GroceryListPage from "./pages/GroceryListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// components
import DefaultLayout from "./components/layout/DefaultLayout";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="*" element={<NotFoundPage />} />
              <Route path={paths.homePage} element={<HomePage />} />
              <Route
                path={paths.groceryListPage}
                element={<GroceryListPage />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}
