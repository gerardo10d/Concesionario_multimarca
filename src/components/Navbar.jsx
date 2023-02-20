import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-400">
      <ul className="flex justify-between items-center my-3">
        <li>Logo</li>
        <li>Navegación 1</li>
        <li>Navegación 2</li>
        <li>Navegación 3</li>
        <li id="px-3">
          <Link to="login">
            <button className="bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-300">Iniciar sesión</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
