import GroceryList from "../components/lists/GroceryCardList";
import CartList from "../components/lists/CartList";

export default function GroceryListPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="my-3 d-center fs-1">Lista della spesa</div>
        <GroceryList />
        <CartList />
      </div>
    </div>
  );
}
