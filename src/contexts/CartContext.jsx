import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const lessToCart = (fruit) => {
    const isFruitInCart = cart.find(
      (actualFruit) => actualFruit.name === fruit.name
    );
    if (isFruitInCart.quantity > 1) {
      setCart(
        cart.map((targetFruit) =>
          targetFruit.name === fruit.name
            ? { ...targetFruit, quantity: targetFruit.quantity - 1 }
            : targetFruit
        )
      );
    } else {
      setCart(cart.filter((targetFruit) => targetFruit.name !== fruit.name));
    }
  };
  const addToCart = (fruit) => {
    const isFruitInCart = cart.find(
      (actualFruit) => actualFruit.name === fruit.name
    );

    if (isFruitInCart) {
      setCart(
        cart.map((targetFruit) =>
          targetFruit.name === fruit.name
            ? { ...targetFruit, quantity: targetFruit.quantity + 1 }
            : targetFruit
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
    <CartContext.Provider
      value={{ cart, lessToCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { useCart, CartProvider };
