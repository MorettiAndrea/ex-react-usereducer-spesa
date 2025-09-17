// react import

import { BrowserRouter, Routes, Route } from "react-router-dom";

// my paths
import paths from "./data/paths";

// pages
import GroceryListPage from "./pages/GroceryListPage";
import HomePage from "./pages/HomePage";

// components
import DefaultLayout from "./components/layout/DefaultLayout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path={paths.homePage} element={<HomePage />} />
            <Route path={paths.groceryListPage} element={<GroceryListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
