import React, { useState } from "react";
import CounterItemCard from "../assets/styles/elements/CounterItemCard";

export const ItemCount = ({ name, stock, initial, description}) => {

  const [counter, setCounter] = useState( initial );

  const [stockCount, setStokCount] = useState( stock );
  
  const handleAdd = () => {
    if( counter < stock ){
      setCounter( counter + 1 );
      setStokCount( stockCount - 1 );

    }
  }

  const handleRest = () => {
    if( counter >= 1){
      setCounter( counter - 1 );
      setStokCount( stockCount + 1 );
    }
  }

  const onAdd = () => {
    if(counter > 0){
      console.log(`Se agragaron ${counter} los producots al carrito`);
    }
  }

  return (
    <CounterItemCard>
      <h3 className="title-item">{name}: {stockCount} en stock</h3>
      <div className="content-item">
        <div className="counter">
          <button className="minus" onClick={ handleRest }>-</button>
          <p className="count">{counter}</p>
          <button className="plus" onClick={ handleAdd }>+</button>
        </div>

        <p className="add-shopping-car"><button onClick={onAdd}>Agregar al carrito</button></p>
      </div>
    </CounterItemCard>
  );
};


