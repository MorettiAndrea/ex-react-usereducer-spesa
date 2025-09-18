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
    if (!isFruitInCart) {
      return;
    }
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
  let totalCost = 0;
  cart.forEach((product) => {
    totalCost += product.quantity * product.price;
  });

  const removeFromCart = (fruit) => {
    setCart(cart.filter((toDeleteFruit) => toDeleteFruit.name !== fruit.name));
  };

  return (
    <CartContext.Provider
      value={{ cart, totalCost, lessToCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { useCart, CartProvider };
