import React, { useState } from "react";
import ItemCard from "../assets/styles/elements/ItemCard";

export const ItemCount = ({ stock, initial }) => {

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
    <ItemCard>
      <h3 className="title-item">Camisa tiger: {stockCount} en stock</h3>

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


