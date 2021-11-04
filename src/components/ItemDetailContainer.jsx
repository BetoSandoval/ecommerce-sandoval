import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Main from "../assets/styles/elements/Main";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const fakeApi = `https://fakestoreapi.com/products/${id}`;
  const [item, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(fakeApi)
        .then((res) => res.json())
        .then((json) => setItem(json));
    }, 2000);
  }, [fakeApi]);

  if (item.length === 0) {
    return (
      <Main>
        <div className="main-container">
          <h1 className="main-title">Loading...</h1>
        </div>
      </Main>
    );
  } else {
    return (
      <Main>
        <div className="main-container">
          <ItemDetail item={item} />
        </div>
      </Main>
    );
  }
};

export default ItemDetailContainer;
