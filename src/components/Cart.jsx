import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { firestore } from "../firebase/firebase";

const Cart = () => {
  const {cart, deleteToCartContext, emptyCartContext} = useContext(CartContext);
  const [id, setId] = useState();
  let sumAllProducPrice = 0;

  const handleDelete = (id) => {
    deleteToCartContext(id);
  };

  const totalProductPrice = (price, amount) => {
    let totalProduct = price * amount;
    sumAllProducts(totalProduct);
    return totalProduct;
  }

  const sumAllProducts = (totalProduct) => {
    sumAllProducPrice += totalProduct;
    return sumAllProducPrice;
  }

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
      /* date: firestore.Timestamp.now() */
    };
    console.log(order);
    const db = firestore;
    const collection = db.collection("orders");
    const query = collection.add(order);

    query.then((result) => {
      setId(result.id);
    });

    emptyCartContext();
  };

  if (id) {
    return (
      <>
        <h3>Your order ID is: {id}</h3>
        <Link to="/">
          <button>Keep buying and take a look to other products</button>
        </Link>
      </>
    );
  } else
    return (
      <>
        <ProductContainer>
          {cart.length ? (
            cart.map((index) => (
              <div key={index.product.item.id}>
                <Product>
                  <img src={index.product.item.image} alt="imagen del producto" />
                  <div className="info-container">
                    <h3>{index.product.item.title}</h3>
                    <p>
                      Sub total : $ {totalProductPrice(index.product.item.price, index.amount)} (Cant :{" "}
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
        </ProductContainer>
        
          {cart.length ?
          <PurchaseContainer>
            <h2> Total: $ {sumAllProducPrice}</h2>
            <button onClick={purchaseProduct}>Purchase product</button>
          </PurchaseContainer>
          : null}
      </>
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

const Main = styled.div`
  text-align: center;
  .title {
    font-size: 4rem;
  }
`;

const ProductContainer = styled.div`
  display: inline-block;
  max-width: 52%;
`;

const PurchaseContainer = styled.div`
max-width: 40%;
display: inline-block;
margin-left: 11rem;
position: absolute;
`;

export default Cart;
