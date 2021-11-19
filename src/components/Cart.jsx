import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteToCartContext } = useContext(CartContext);
  console.log(cart);
 

  return (
    <div>
      {cart.length ? (
        cart.map((index) => (
          <article key={index.product.item.id}>
            <h3>{index.product.item.title}</h3>
            <p>
              Total : $ {index.product.item.price * index.amount} (Cant :{" "}
              {index.amount})
            </p>
            <button onClick={() => deleteToCartContext(index.product.item.id)}>Delete</button>
          </article>
        ))
      ) : (
        <>
          <h3> The cart is empty </h3>
          <Link to="/">
            <button>Take a look to our products</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
