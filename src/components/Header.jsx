import React, { useContext } from "react";
import Headder from "../assets/styles/elements/Headder";
import CarWidget from "./CarWidget";
import { NavBar } from "./NavBar";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  console.log(cart)

  return (
    <Headder id="main-header" className="header-v5 hidden-sm hidden-xs">
      <div className="container">
        <div className="inner">
          <div className="logo">E-commerce</div>

          <div className="menu">
            <NavBar/>

            <CarWidget/>
          </div>
        </div>
      </div>
    </Headder>
  );
};

export default Header;
