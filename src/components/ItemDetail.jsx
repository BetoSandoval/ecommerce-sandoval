import React from "react";
import styled from "styled-components";
import { ItemCount } from "./ItemCount";


const ItemDetail = (props) => {
  const stateUpliftingfronCounter = ( datachild ) => {
    console.log('Soy un metodo invocado en el hijo pero me ejecuto en el padre')
    console.log(datachild)
  }

  return (
      <ItemDetailContainer>
        <figure>
          <img src={props.item.image} alt="Imagen del producto" />
        </figure>

        <div className="item-info">
          <h3 className="title-item">{props.item.title}</h3>
          <ItemCount
            stock={props.item.rating.count}
            initial={0}
            onClick={stateUpliftingfronCounter}
          />

          <p className="desc">{props.item.description}</p>

          <p className="price">Price: $ {props.item.price}</p>
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
    .price {
      font-size: 3rem;
    }
  }
`;

export default ItemDetail;
