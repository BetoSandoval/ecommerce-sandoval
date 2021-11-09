import React,{useState} from "react";
import styled from "styled-components";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const [count, setCount] = useState(0)

  const stateUpliftingfronCounter = (datachild) => {
    setCount(datachild)
  };

  console.log(`Se agregaron ${count} producots al carrito`);

  return (
    <ItemDetailContainer>
      <figure>
        <img src={props.item.image} alt="Imagen del producto" />
      </figure>

      <div className="item-info">
        <h3 className="title-item">{props.item.title}</h3>
        <p className="price">Price: $ {props.item.price}</p>
        <p className="desc">{props.item.description}</p>

        {
          count === 0 
          ? <ItemCount
            stock={props.item.rating.count}
            initial={0}
            onClick={stateUpliftingfronCounter}
            />
          : <Link to={"/cart"}>
              <button>go to cart</button>
            </Link> 
        }

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
