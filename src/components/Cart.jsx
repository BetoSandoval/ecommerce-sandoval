import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { firestore } from "../firebase/firebase";

const Cart = () => {
  const { cart, deleteToCartContext, emptyCartContext } = useContext(CartContext);
  const [id, setId] = useState();

  const handleDelete = (id) => {
    deleteToCartContext(id);
  };

  const purchaseProduct = () => {
    const user = {
      name: "Gemma",
      email: "gemma@email.com",
      phone: "1245656",
      total: "",
    };

    const order = {
      buyer: user,
      items: cart,
      total: 1000,
      /* date: firestore.TimeStamp.now() */
    };

    const db = firestore;
    const collection = db.collection("orders");
    const query = collection.add(order);

    query.then((result) => {
      console.log(result.id);
      setId(result.id)
    });

    emptyCartContext();
  };

  return (
    <div>
      {cart.length ? (
        cart.map((index) => (
          <div key={index.product.item.id}>
            <Product>
              <img src={index.product.item.image} alt="imagen del producto" />
              <div className="info-container">
                <h3>{index.product.item.title}</h3>
                <p>
                  Total : $ {index.product.item.price * index.amount} (Cant :{" "}
                  {index.amount})
                </p>
                <button onClick={() => handleDelete(index.product.item.id)}>
                  Delete
                </button>
              </div>
            </Product>
          </div>
        ))
      ) : (
        <Main>
          <h3 className="title"> The cart is empty </h3>
          <Link to="/">
            <button>Take a look to our products</button>
          </Link>
        </Main>
      )}
      {cart.length ? <button onClick={purchaseProduct}>Purchase product</button> : null}
      {id ? <h3>Your  order ID is: {id}</h3> : null}
    </div>
  );
};

const Product = styled.article`
  width: 69.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #2b2b2b;
  border-radius: 3px;
  margin-left: 4rem;
  padding: 2rem;
  margin-bottom: 1rem;
  img {
    max-width: 13rem;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Main = styled.article`
  text-align: center;
  .title {
    font-size: 4rem;
  }
`;

export default Cart;
