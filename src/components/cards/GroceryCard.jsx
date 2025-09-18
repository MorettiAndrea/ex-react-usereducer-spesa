import { useCart } from "../../contexts/CartContext";

export default function GroceryCard({ Target }) {
  const { addToCart, lessToCart, removeFromCart } = useCart();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text text-center">nome: {Target.name}</p>
          <p className="card-text text-center ">prezzo: {Target.price} €</p>
          <div className="col-12 d-around my-3">
            <button
              onClick={() => lessToCart(Target)}
              className="btn btn-secondary "
            >
              ➖
            </button>
            <button
              onClick={() => removeFromCart(Target)}
              className="btn btn-danger "
            >
              🗑️
            </button>
            <button
              onClick={() => addToCart(Target)}
              className="btn btn-secondary "
            >
              ➕
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
