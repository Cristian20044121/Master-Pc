import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      {/* header  */}
      <header className="nav bg-purple-800 w-100 flex justify-between items-center p-5 flex-col md:flex-row">
        <img
          className="w-40 rounded-md m-5 cursor-pointer"
          src="https://static.wixstatic.com/media/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png/v1/fit/w_2500,h_1330,al_c/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png"
        />
        <nav className="flex justify-between w-100">
          {" "}
          <Link className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out" to="/">
            Inicio
          </Link>
          <Link className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out" to="/MisCompras">
            Mis Compras
          </Link>
          <Link className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out" to="/Nosotros">
            Nosotros
          </Link>
          <Link className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out" to="/Contacto">
            Contacto
          </Link>
        </nav>
        <div>
          <Link className="link ml-5" to="/Profile">
            <img className="w-50 h-28" src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default navbar;
