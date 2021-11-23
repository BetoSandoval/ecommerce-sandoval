import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Main from "../assets/styles/elements/Main";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebase";

const ItemListContainer = (props) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("productos");
    let promesa;

    if (category) {
      const query = collection.where("category", "==", category);
      promesa = query.get();

      promesa.then((querySnapshot) => {
        setProducts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
      });
    } else {
      promesa = collection.get();
      promesa
        .then((querySnapshot) => {
          setProducts(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
        })
        .catch(() => {
          console.log("Hubo un error");
        });
    }
  }, [category]);

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
          <ItemList dataItems={products} />
        </div>
      </Main>
    );
  }
};

export default ItemListContainer;
