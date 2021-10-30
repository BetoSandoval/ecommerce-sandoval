import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Main from "../assets/styles/elements/Main";

const ItemDetailContainer = () => {
  const fakeApi = "https://fakestoreapi.com/products/1";

  const [item, setItem] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(fakeApi)
        .then((res) => res.json())
        .then((json) => setItem(json));
    }, 2000);
  }, [fakeApi]);

  if (item.length === 0) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <Main>
        <div className='main-container'>
          <ItemDetail item={item} />
        </div>
      </Main>
    );
  }
};

export default ItemDetailContainer;
