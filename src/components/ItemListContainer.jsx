import React, { useEffect, useState } from "react";
import { ItemCount } from "./ItemCount";
import styled from "styled-components";
import ItemList from "./ItemList";

// itemListContainer es un Componente destinado a conseguir la logica del catalogo (una array de productos actualiza el estado y pasa los datos a itemList)
const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  const peticion = () => {
    return new Promise((resolve, reject) => {
      if (items.length !== 0) {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      } else {
        const error = new Error("No se pudo conectar con los datos");
        reject(error)
      }
    });
  };


  useEffect(() => {
    peticion(  )
    .then((response) => console.log(response))
    .catch( err => console.error(err));
  }, [])


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
