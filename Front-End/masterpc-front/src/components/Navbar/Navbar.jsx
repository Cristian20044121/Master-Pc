import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  //librería motion(animación)


const navbar = () => {
  /**
   * animación librería motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      {/* header  */}
      <motion.header
        className="nav bg-purple-800 w-full flex justify-between items-center p-5 flex-col md:flex-row "
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          className="w-40 rounded-md m-5 cursor-pointer"
          src="https://static.wixstatic.com/media/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png/v1/fit/w_2500,h_1330,al_c/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png"
        />
        <nav className=" w-full flex justify-center items-center p-5 flex-col md:flex-row ">
          {" "}
          <Link
            className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
            to="/"
          >
            Inicio
          </Link>
          <Link
            className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
            to="/MisCompras"
          >
             Compras
          </Link>
          <Link
            className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
            to="/Nosotros"
          >
            Nosotros
          </Link>
          <Link
            className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
            to="/Contacto"
          >
            Contacto
          </Link>
        </nav>
        <div>
          <Link className="link ml-5" to="/Profile">
            <img
              className="w-50 h-28"
              src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
            />
          </Link>
        </div>
      </motion.header>
    </div>
  );
};

export default navbar;
