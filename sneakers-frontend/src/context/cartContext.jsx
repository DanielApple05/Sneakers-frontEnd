import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState(
  JSON.parse(localStorage.getItem('cartItems')) || []
);

  const addToCart = (product) => {
    if (!product.quantity || product.quantity <= 0) return;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeAnItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeAnItemFromCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};