import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Logo</li>
        <li>Navegación 1</li>
        <li>Navegación 2</li>
        <li>Navegación 3</li>
        <li id="navbar__li__botonLogin">
          <Link to="login">
            <button className="navbar__botonLogin">Iniciar sesión</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
