import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Main from "../assets/styles/elements/Main";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { category } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setItems(json));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((resp) => resp.json())
        .then((json) => setItems(json));
    }
  }, [category]);

  if (items.length === 0) {
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
          <h1 className="main-title">{props.greeting}</h1>
          {/* Crear dos componentes más itemList e item, Item list itera a item el numero de veces */}
          <ItemList dataItems={items} />
        </div>
      </Main>
    );
  }
};

export default ItemListContainer;
