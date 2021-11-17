import React,{useContext, useState} from "react";
import styled from "styled-components";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { useNavigate } from 'react-router-dom';


const ItemDetail = (product) => {

  const navigate = useNavigate();
  const { addToCartContext } = useContext(CartContext);
  const [show, setShow] = useState(false)

  const onAdd = (amount) => {
    addToCartContext(product, amount);
    setShow(true)
  };
  
  const redireccionar = () => {
    navigate("/cart");
  }

  return (
    <ItemDetailContainer>
      <figure>
        <img src={product.item.image} alt="Imagen del producto" />
      </figure>

      <div className="item-info">
        <h3 className="title-item">{product.item.title}</h3>
        <p className="price">Price: $ {product.item.price}</p>
        <p className="desc">{product.item.description}</p>
 
        <ItemCount
          stock={product.item.rating.count}
          initial={0}
          onAdd={onAdd}
        />
        { show && <button onClick={redireccionar}>Go to cart</button>}
      </div>
    </ItemDetailContainer>
  );
};

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  figure {
    width: 50%;
    position: relative;
    img {
      width: 40rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .item-info {
    width: 50%;
    text-align: center;
    margin: 24rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title-item {
      margin-bottom: 0.5rem;
    }
    .desc {
      padding: 2rem;
      font-size: 2rem;
      text-align: left;
      margin-bottom: 3rem;
    }
    .price {
      font-size: 3rem;
    }
  }
`;

export default ItemDetail;
