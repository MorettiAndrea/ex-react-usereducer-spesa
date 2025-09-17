import { useCart } from "../../contexts/CartContext";
import { useState } from "react";

export default function GroceryCard({ Target }) {
  const { cart, setCart } = useCart();
  const addToCart = (fruit) => {
    const isFruitInCart = cart.find(
      (actualFruit) => actualFruit.name === fruit.name
    );
    if (isFruitInCart) {
      setCart(
        cart.map((target) =>
          target.name === fruit.name
            ? { ...target, quantity: target.quantity + 1 }
            : target
        )
      );
    } else {
      setCart([...cart, { ...fruit, quantity: 1 }]);
    }
  };

  const removeFromCart = (fruit) => {
    setCart(cart.filter((toDeleteFruit) => toDeleteFruit.name !== fruit.name));
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p className="card-text">{Target.name}</p>
          <p className="card-text">{Target.price} €</p>
          <div className="col-12 d-around my-3">
            <button onClick={addToCart} className="btn btn-primary">
              Aggiungi al carrello
            </button>
            <button onClick={removeFromCart} className="btn btn-danger">
              Rimuovi prodotto
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
