import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CarWidget = () => {
  const { cart } = useContext(CartContext); // Recordar borrar porque me bajan puntos

  return (
    <Link to="/cart">
      <ShoppingCar>
        {cart.length ? <Number>{cart.length}</Number> : null}
        <span className="material-icons">shopping_cart</span>
      </ShoppingCar>
    </Link>
  );
};

const ShoppingCar = styled.div`
  border: 1px solid #e5e5e5;
  width: 10rem;
  margin-top: 1rem;
  .material-icons {
    color: #80b435;
    padding: 0.5rem 3.8rem;
  }
`;

const Number = styled.p`
  width: 10rem;
  margin-top: 2rem;
  text-align: center;
  background-color: red;
  color: white;
  border-radius: 5rem;
`;

export default CarWidget;
