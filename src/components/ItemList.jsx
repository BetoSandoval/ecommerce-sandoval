import React from "react";
import Item from "./Item";
import styled from "styled-components";

// Agrupa y mapea items
const ItemList = (props) => {
  return (
    <ItemsListContainer>
      {props.dataItems.map((item) => (
        <Item
          key={item.id}
          name={item.title}
          price={item.price}
          description={item.description}
          stock={item.rating.count}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </ItemsListContainer>
  );
};

const ItemsListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 29rem 29rem 29rem 29rem;
  width: 100%;
`;

export default ItemList;
