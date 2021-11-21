import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Cart = () => {
  const { cart, deleteToCartContext } = useContext(CartContext);

  const handleDelete = (id) => {
    deleteToCartContext(id);
  };
  console.log(cart);

  return (
    <div>
      {cart.length ? (
        cart.map((index) => (
          <Product key={index.product.item.id}>
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
        ))
      ) : (
        <Main>
          <h3 className="title"> The cart is empty </h3>
          <Link to="/">
            <button>Take a look to our products</button>
          </Link>
        </Main>
      )}
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
  .info-container{
    display: flex;
    flex-direction:column;
    align-items: center;
  }
`;

const Main = styled.article`
  text-align:center;
  .title{
    font-size: 4rem;
  }
`;

export default Cart;
