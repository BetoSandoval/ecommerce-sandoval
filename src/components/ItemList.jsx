import React from "react";
import Item from "./Item";
import styled from "styled-components";
import { Link } from "react-router-dom";



const ItemList = (products) => {
  return (
    <ItemsListContainer>
      {products.dataItems.map((item) => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            name={item.title}
            price={item.price}
            description={item.description}
            stock={item.stock}
            image={item.image}
            rating={item.rating}
            category={item.category}
          />
        </Link>
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
