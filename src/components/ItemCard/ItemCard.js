import React from "react";
import './ItemCard.css';
import { NavLink } from "react-router-dom";

const ItemCard = ({ title, strain, image, price, stock, button, path }) => {
    return (
        <div className="card-container">
            <div className="card-title">
                <span>{title}</span>
            </div>
            <div className="card-strain">
                {strain}
            </div>
            <div className="card-image">
                {image ? <img src={image} alt="Wine image" className="card-image-style" /> : ''}
            </div>
            <div className="card-price">
                ${price}
            </div>
            <div className="card-stock">
                Stock: {stock}
            </div>
            <NavLink className="card-button" to={path}>{button}</NavLink>
        </div>
    )

}

export default ItemCard;