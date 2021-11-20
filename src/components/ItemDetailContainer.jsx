import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Main from "../assets/styles/elements/Main";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("productos");
    const query = collection.doc(id);
    const promesa = query.get()

    promesa
           .then( (querySnapshot) => {
             const data = querySnapshot.data();
             setItem(data)
           });
  }, [id]);

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
