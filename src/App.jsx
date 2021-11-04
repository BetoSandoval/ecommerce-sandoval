import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
/* import ItemDetailContainer from "./components/ItemDetailContainer"; */
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting='Our products'/>} />
        <Route exact path="/category/:category" element={<ItemListContainer/>} />
        {/* <Route exact path="/item/:id" component={ItemDetailContainer} /> */}
      </Routes>
    </>
  );
};

export default App;
