import React, { useContext } from "react";
import {CartContext} from '../context/CartContext';
import styled from "styled-components";


const CarWidget = () => {

  const {cart} = useContext(CartContext);

  return (
    <ShoppingCar>
      <span className="material-icons">shopping_cart</span>
      {cart.length ? cart.length : null }
    </ShoppingCar>
  );
};

const ShoppingCar = styled.div`
  border: 1px solid #e5e5e5;
  width: 10rem;
  margin-top: 2rem;
  .material-icons {
    color: #80b435;
    padding: 0.5rem 3.8rem;
  }
`;

export default CarWidget;