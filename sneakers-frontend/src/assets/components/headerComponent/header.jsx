import React from "react";
import NavBar from "./navBar";
import { useCart } from "../../../context/cartContext";


const Header = () => {
  const { cartItems } = useCart();

  return (
    <div className="sticky top-0 shadow-xl z-50">
      <NavBar cartCount={cartItems.length} />
    </div>
  );
};

export default Header;
