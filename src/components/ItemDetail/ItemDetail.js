import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({product}) => {
  const onAddFunction = () => {
    console.log('Se agregaron los productos al carro');
  }
  return (
    <div className="item-detail-cont">
      <div className="image-detail-container">
        
        <img src={product.linkimg} alt="" className="item-img" />
      </div>
      <div className="product-detail-container">
        <h1>{product.name}</h1>
        <h3>{product.strain}</h3>
        <span>{product.description}</span>

      </div>
      <div className="cart-container">
        <h1>${product.price}</h1>
        <span>Stock: {product.stock}</span>
        <div className="item-count-cont">
        <ItemCount stock={product.stock} initial={1} onAdd={onAddFunction()} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;