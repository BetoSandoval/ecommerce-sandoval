import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CarWidget = () => {
  const { cart } = useContext(CartContext);

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
  text-align: center;
  .material-icons {
    color: #80b435;
    padding: 0.5rem 3.8rem;
  }
`;

const Number = styled.p`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  text-align: center;
  background-color: red;
  color: white;
  border: 0.5rem;
  border-radius: 50%;
`;

export default CarWidget;
