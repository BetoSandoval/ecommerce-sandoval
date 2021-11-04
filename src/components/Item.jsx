import React from "react";
import ItemCard from "../assets/styles/elements/ItemCard";

const Item = ({ name, price, description, stock, image, rating, category }) => {
  return (
    <ItemCard>
      <h3 className="title-item">{name}</h3>

      <figure className="img-desc-container">
        <img src={image} alt="HTML Reference logo" />
      </figure>

      <div className="info-container">
        <p>Price: $ {price}</p>
        <p>Stock: {stock}</p>
        <p>Category: {category}</p>
      </div>
    </ItemCard>
  );
};

export default Item;
