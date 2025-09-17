import Cart from "../contextComponents/CartCard";
import { useCart } from "../../contexts/CartContext";

export default function CartList() {
  const { cart } = useCart();
  return (
    <>
      <Cart Target={cart} />
    </>
  );
}
