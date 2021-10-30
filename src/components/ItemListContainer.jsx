import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Main from '../assets/styles/elements/Main';
// itemListContainer es un Componente destinado a conseguir la logica del catalogo (una array de productos actualiza el estado y pasa los datos a itemList)
const ItemListContainer = (props) => {
  const fakeApi = 'https://fakestoreapi.com/products';
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch(fakeApi)
      .then( resp => resp.json() )
      .then( json => setItems(json) )
  }, [fakeApi])

  if( items.length === 0 ){
    return(
      <Main>
        <div className="main-container">
          <h1 className="main-title">Cargando productos...</h1>
          </div>
      </Main>
    )
  } else{
    return (
      <Main>
        <div className="main-container">
          <h1 className="main-title">{props.greeting}</h1>
          {/* Crear dos componentes más itemList e item, Item list itera a item el numero de veces */}
          <ItemList dataItems={items}/>
        </div>
      </Main>
    ); 
  }
};



export default ItemListContainer;
