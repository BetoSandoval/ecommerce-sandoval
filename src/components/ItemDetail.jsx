import React from "react";
import styled from "styled-components";
import { ItemCount } from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <ItemDetailContainer>
      <figure>
        <img src={props.item.image} alt="Imagen del producto" />
      </figure>

      <div className="item-info">
        <ItemCount
          name={props.item.title}
          stock={props.item.rating.count}
          initial={0}
        />

        <p className="desc">{props.item.description}</p>

        <p className="price">Price: {props.item.price}</p>
      </div>
    </ItemDetailContainer>
  );
};

const ItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
  figure {
    width: 50%;
    img {
      width: 40rem;
    }
  }

  .item-info {
    width: 50%;
    text-align: center;
    margin: 24rem 2rem;
    .desc {
      padding: 2rem;
      font-size: 2rem;
      text-align: left;
      margin-bottom: 3rem;
    }
    .price{
      font-size: 3rem;
    }
  }
`;

export default ItemDetail;
