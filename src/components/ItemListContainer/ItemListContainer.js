import React from "react";
import './ItemListContainer.css'
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemCard from "../ItemCard/ItemCard";

function ItemListContainer({ title, description }) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch("data.json")
                const data = await res.json();
                setProduct(data.productos);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return (
        <div className="greetingcontainer">
            {
               
                product.map((prod) => {
                    return (
                        <ItemCard key={prod.id} path={`producto/${prod.id}`} title={prod.name} price={prod.price} stock={prod.stock} button='Ver más' strain={prod.strain} image={prod.linkimg} />
                    )
                })
            }
        </div>
    );
}
export default ItemListContainer;
