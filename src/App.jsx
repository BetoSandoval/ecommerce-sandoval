import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import CustomComponent from "./context/CartContext";

const App = () => {
  return (
    <>
      <CustomComponent>
        <Header />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Our products" />}/>
          <Route exact path="/category/:category" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CustomComponent>
    </>
  );
};

export default App;
