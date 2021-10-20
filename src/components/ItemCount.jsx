import React from "react";
import styled from "styled-components";

export const ItemCount = () => {
  return (
    <ItemCard>
      <h3 className="title-item">Camisa tiger</h3>

      <div className="content-item">
        <div className="counter">
          <button className="minus">-</button>
          <p className="count">Cantidad</p>
          <button className="plus">+</button>
        </div>

        <p className="add-shopping-car"><button>Agregar al carrito</button></p>
      </div>
    </ItemCard>
  );
};

const ItemCard = styled.div`
  margin-bottom: 4rem;
  width: 26.2rem;
  display: inline-block;
  margin-bottom: 4rem;

  .title-item{
      text-align: center;
      margin: 1rem 0;
      
  }
  .content-item {
    width: 26.2rem;

    .counter{
        display: flex;
        justify-content: space-around;
        margin: 1rem 0;

        .minus{
            width: 23.3%;
        }
        .count{
            width: 23.3%;
        }
        .plus{
            width:23.3%
        }
    }

    .add-shopping-car{
        text-align:center;
    }
  }
`;
