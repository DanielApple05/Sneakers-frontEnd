import { useState, useContext, createContext } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const lsCartItems = localStorage.getItem('cartItem')
  const [cartItems, setCartItems] = useState(lsCartItems || []);

  const addToCart = (product) => {
    if (!product.quantity || product.quantity <= 0) return;

    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      localStorage.setItem('cartItem', cartItems)
      return [...prev, product];
    });
  };

  const emptyCart = () => {
    cartItems = []
  };

  const removeAnItemFromCart = (id) => {
   setCartItems(cartItems.filter(product => product.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, emptyCart, removeAnItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}; 