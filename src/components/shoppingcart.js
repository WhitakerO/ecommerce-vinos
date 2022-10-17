import React from "react";
import cart from "../assets/img/cart3.svg"

function ShoppingCart ({size}) {
    size = size + 'px';
    return (
        <img src={cart} width={size}/>
    ); 
}

export default ShoppingCart;