import GroceryList from "../components/lists/GroceryCardList";
import CartList from "../components/lists/CartList";
import { useCart } from "../contexts/CartContext";

export default function GroceryListPage() {
  let { totalCost } = useCart();
  const decimalCost = totalCost.toFixed(2);
  return (
    <div className="container">
      <div className="row">
        <div className="my-3 d-center fs-1">Lista della spesa</div>
        <GroceryList />
        <CartList />
        <div className="text-center">Costo totale :{decimalCost} €</div>
      </div>
    </div>
  );
}
