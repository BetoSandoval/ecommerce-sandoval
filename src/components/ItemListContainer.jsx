import React from "react";
import { ItemCount } from "./ItemCount";
import styled from "styled-components";


const ItemListContainer = (props) => {
  return (
    <Main>
      <div className="main-container">
        <h1 className="main-title">{props.greeting}</h1>

        <ItemCount stock={5 } initial={0}/>
      </div>
    </Main>
  );
};

const Main = styled.main`
    .main-container{
        margin-right: auto;
        margin-left: auto;
        width: 117rem;
        padding: 0 1.5rem;
        .main-title{
            text-align: center;
        }
    }
`;

export default ItemListContainer;
