import React from 'react'
import { ItemCount } from "./ItemCount";

const Item = ({name, description, stock}) => {
    return (
        <div>
            <ItemCount 
            name={name} 
            stock={stock} 
            initial={0}
            description={description}
            />
        </div>
    )
}

export default Item
