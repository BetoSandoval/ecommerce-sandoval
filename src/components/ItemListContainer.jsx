import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Main from "../assets/styles/elements/Main";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebase";

const ItemListContainer = (props) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  //1) Llamar a la db
  //2) Coleccion
  //3) Hacer consulta
  //4) Obetener resultados y verificar que todo este en orden
  //5)Seteo el esatdo
  const db = firestore;
  const collection = db.collection("productos");
  const promesa = collection.get();

  promesa
    .then( (querySnapshot) => {
      setProducts(querySnapshot.docs.map( doc => ({...doc.data(),id:doc.id}) ));
      console.log(products);
      }
    )
    .catch(() => {
      console.log("Hubo un error");
    });

  /*   useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setItems(json));
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((resp) => resp.json())
        .then((json) => setItems(json));
    }
  }, [category]); */

  if (products.length === 0) {
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
          <ItemList dataItems={products} />
        </div>
      </Main>
    );
  }
};

export default ItemListContainer;
