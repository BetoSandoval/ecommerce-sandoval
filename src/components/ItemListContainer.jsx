import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import styled from "styled-components";
import ItemList from "./ItemList";
import itemData from '../assets/Data/items';

// itemListContainer es un Componente destinado a conseguir la logica del catalogo (una array de productos actualiza el estado y pasa los datos a itemList)
const ItemListContainer = (props) => {
  const fakeApi = itemData;
  const [items, setItems] = useState([]);

  const peticion = ( fakeApi ) => {
    return new Promise((resolve, reject) => {
      if (fakeApi.length !== 0) {
        setTimeout(() => {
          resolve(fakeApi);
        }, 2000);
      } else {
        const error = new Error("No se pudo conectar con los datos");
        reject(error)
      }
    });
  };


  useEffect(() => {
    peticion( fakeApi )
    .then(data => setItems(data))
    .catch( err => console.error(err));
  }, [fakeApi])

  console.log(items);

  return (
    <Main>
      <div className="main-container">
        <h1 className="main-title">{props.greeting}</h1>
        {/* Crear dos componentes más itemList e item, Item list itera a item el numero de veces */}
        <ItemList />

        <ItemCount stock={5} initial={0} />
      </div>
    </Main>
  );
};

const Main = styled.main`
  .main-container {
    margin-right: auto;
    margin-left: auto;
    width: 117rem;
    padding: 0 1.5rem;
    .main-title {
      text-align: center;
    }
  }
`;

export default ItemListContainer;
