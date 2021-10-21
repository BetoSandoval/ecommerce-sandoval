import React, { useState } from "react";
import ItemCard from "../assets/styles/elements/ItemCard";

export const ItemCount = ({ stock, initial, onAdd }) => {

  const [counter, setCounter] = useState(initial);
  
  const handleAdd = () => {
    if( counter < stock ){
      setCounter( counter + 1 );
    }
  }

  const handleRest = () => {
    if( counter >= 1){
      setCounter( counter - 1 );
    }
  }


  return (
    <ItemCard>
      <h3 className="title-item">Camisa tiger: {stock} en stock</h3>

      <div className="content-item">
        <div className="counter">
          <button className="minus" onClick={ handleRest }>-</button>
          <p className="count">{counter}</p>
          <button className="plus" onClick={ handleAdd }>+</button>
        </div>

        <p className="add-shopping-car"><button onClick={onAdd}>Agregar al carrito</button></p>
      </div>
    </ItemCard>
  );
};


