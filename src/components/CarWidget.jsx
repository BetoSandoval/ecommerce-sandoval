import React from "react";
import styled from "styled-components";

const ShoppingCar = styled.div`
  border: 1px solid #e5e5e5;
  width: 10rem;
  margin-top: 2rem;
  .material-icons {
    color: #80b435;
    padding: 0.5rem 3.8rem;
  }
`;

const CarWidget = () => {
  return (
    <ShoppingCar>
      <span className="material-icons">shopping_cart</span>
    </ShoppingCar>
  );
};

export default CarWidget;
