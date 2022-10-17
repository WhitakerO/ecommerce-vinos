import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    let { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await fetch("http://localhost:3000/data.json");
                const data = await res.json();
                data.productos.forEach((res) => {
                    if(res.id == productId)
                    {
                        setProduct(res);
                    }
                        
                })
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, []);

    
    return (
        <div className="item-detail-container">
            <ItemDetail product={product} />
        </div>
        
    )

}
export default ItemDetailContainer;