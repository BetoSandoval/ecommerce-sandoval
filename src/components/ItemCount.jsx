import React, { useState } from "react";
import CounterItemCard from "../assets/styles/elements/CounterItemCard";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleRest = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const addToCart = () => {
    onAdd(counter);
  };

  return (
    <CounterItemCard>
      <div className="content-item">
        <p>Stock: {stock}</p>
        <div className="counter">
          <button className="minus" onClick={handleRest}>
            -
          </button>
          <p className="count">{counter}</p>
          <button className="plus" onClick={handleAdd}>
            +
          </button>
        </div>
        <p className="add-shopping-car">
          <button onClick={addToCart}>confirm purchase</button>
        </p>
      </div>
    </CounterItemCard>
  );
};
