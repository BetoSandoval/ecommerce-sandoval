import React, { useState } from "react";
import CounterItemCard from "../assets/styles/elements/CounterItemCard";

export const ItemCount = ({ stock, initial, onClick}) => {

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


  return (
    <CounterItemCard>
      <div className="content-item">
        <p>Stock: {stockCount}</p>
        <div className="counter">
          <button className="minus" onClick={ handleRest }>-</button>
          <p className="count">{counter}</p>
          <button className="plus" onClick={ handleAdd }>+</button>
        </div>
        <p className="add-shopping-car"><button onClick={() => onClick(counter) }>Add to cart</button></p>
      </div>
    </CounterItemCard>
  );
};


