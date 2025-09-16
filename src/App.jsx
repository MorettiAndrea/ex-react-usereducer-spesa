import { BrowserRouter, Routes, Route } from "react-router-dom";
import paths from "./data/paths";
import GroceryListPage from "./pages/GroceryListPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={paths.homePage} element={<HomePage />} />
          <Route path={paths.groceryListPage} element={<GroceryListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
