import React from 'react';
import Item from './Item';
import styled from "styled-components";

// Agrupa y mapea items
const ItemList = (props) => {
    return (
        <ItemCard>
            {props.dataItems.map( (item) => (
                <Item
                key={item.id}
                name={item.name}
                description={item.desc}
                stock={item.stock}
            />
            ))}
        </ItemCard>
    )
}

const ItemCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`;

export default ItemList;
