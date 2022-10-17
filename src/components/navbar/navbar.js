import React from "react";
import './navbar.css'
import ShoppingCart from "../shoppingcart";
import WineBarIcon from '@mui/icons-material/WineBar';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const categorias = [
        { nombre: "malbec", id: 0, ruta: "/cepa/malbec" },
        { nombre: "cabernet sauvignon", id: 1, ruta: "/cepa/cabernet sauvignon" },
        { nombre: "pinot noir", id: 2, ruta: "/cepa/pinot noir" },
        { nombre: "torrontés", id: 3, ruta: "/cepa/torrontes" },
      ];

    return (
        <div className="navcontainer">

            <h1 className="logo-title">WineStore <WineBarIcon /></h1>
            <div>
            {categorias.map((categoria) => {
            return (
                <NavLink
                key={categoria.id}
                to={categoria.ruta}
                className="nav-button"
                >
                {categoria.nombre}
                </NavLink>
            );
            })}
            </div>
            
            <div className="shoppingcart">
                <ShoppingCart size='30' />
            </div>

        </div>
    )
}

export default Navbar;