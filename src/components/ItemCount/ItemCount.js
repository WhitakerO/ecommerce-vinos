import React, { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const subtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };


    return (
        <div className="item-count-container">
            <div className="add-subtract-container">
                <a onClick={subtract} className='add-subtract-button'>-</a>
                <span>{count}</span>
                <a onClick={add} className='add-subtract-button'>+</a>
            </div>
            <div>
                <a disabled={stock === 0} onClick={() => onAdd(count)} className='buy-button'>
                    <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
                </a>

            </div>


        </div>
    );
};

export default ItemCount;