import React from "react";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer greeting="Nuestros Productos"/>
      <ItemDetailContainer/>
    </>
  );
};

export default App;
