import React from 'react'
import Item from './Item'

// Agrupa y mapea items
const ItemList = (props) => {
    return (
        <div>
            <h1>{JSON.stringify(props.dataItems)}</h1>
            <Item/>
        </div>
    )
}

export default ItemList;
