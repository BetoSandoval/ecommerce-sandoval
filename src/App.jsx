import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ItemListContainer greeting="Our products" />
        <ItemDetailContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
