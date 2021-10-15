import React from "react";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header/>
      <ItemListContainer greeting="Lista de los Items"/>
    </>
  );
};

export default App;
