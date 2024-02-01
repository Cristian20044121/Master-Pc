import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; //libreria de alertas REACT
import "./style.css";
import ItemCount from "../ItemCount/Itemcount"; //item contador para aumentar producto o disminuir
import { motion } from "framer-motion"; //libreria motion(animacion)

const MisCompras = () => {
  const [subtotal, setSubtotal] = useState(0); //estado del subtotal
  const [totalFinal, setTotalFinal] = useState(0); //estado del total a pagar

  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  /**
   * actualiza el subtotal segun lo seleccionado en el contador
   * @param {*} newSubtotal 
   */
  const handleSubtotalChange = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };

  /**
   * actualiza el total segun los productos seleccionados y el calculo del handlesubtotal
   * @param {*} newTotalFinal 
   */
  const handleTotalFinalChange = (newTotalFinal) => {
    setTotalFinal(newTotalFinal);
  };

  /**
   * Crea alerta de borrado correctamente
   */
  const Toast = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto eliminado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [cartItem, setCartItem] = useState([]); //estado para manejar los productos en carrito

  /**
   * se maneja para guardar en localStorage los productos previamente agregados o eliminados
   */
  useEffect(() => {
    // Obtener productos del localStorage
    const storedCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setCartItem(storedCart);
  }, []);

  /**
   *
   * @param {*elimina producto con su respectivo id} productIdToRemove
   */
  const handleRemoveFromCart = (productIdToRemove) => {
    console.log(productIdToRemove);

    const updatedCart = cartItem.filter(
      (item) => item.id !== productIdToRemove
    );
    setCartItem(updatedCart);
    Toast();
    handleTotalFinalChange(0);
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
  };

  return (
    <motion.div
      className="section-one p-2"
      variants={sectionVariants} //animacion
      initial="hidden" //animacion
      animate="visible" //animacion
    >
      <div className="container mx-auto my-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800 my-8 mx-4 md:mx-20 lg:mx-20 mb-6">
          ¡Bienvenido a tus compras!
        </h1>
        <h2 className="text-2xl md:text-5xl lg:text-4xl  font-bold text-gray-800 my-8 mx-4 md:mx-20 lg:mx-20 mt-12 text-center">
          <i>Descripción de productos agregados</i>
        </h2>
        <div className="overflow-x-auto">
          <table className=" table w-full sm:w-full lg:w-full xl:w-full mx-auto overflow-x-auto">
            <thead>
              <tr>
                <th className="border border-gray-300 py-2 px-4">Imagen</th>
                <th className="border border-gray-300 py-2 px-4">Nombre</th>
                <th className="border border-gray-300 py-2 px-4 text-center">
                  Cantidad
                </th>
                <th className="border border-gray-300 py-2 px-4">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.length ? (
                cartItem.map((product) => (
                  <tr key={product.id}>
                    <td className="border border-gray-300 py-2 px-4 flex items-center justify-center">
                      <img
                        src={product.mainPhoto}
                        alt={product.name}
                        className="w-12 h-20 object-cover"
                      />
                    </td>
                    <td className="border border-gray-300 py-2 px-4">
                      {product.name}
                    </td>

                    <td className="border border-gray-300 py-2 px-4 ">
                      <ItemCount
                        price={product.price} //se obtiene el precio del producto para calcular subtotal y total
                        onSubtotalChange={handleSubtotalChange}
                        onTotalFinalChange={handleTotalFinalChange}
                      />
                    </td>
                    <td className="border border-gray-300 py-2 px-4 text-center">
                      <button
                        className="bg-red-500 text-white rounded px-3 py-1"
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // Mensaje si no hay productos en el carrito
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    <i>No hay productos en tu carrito.</i>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mx-auto text-center mt-28">
          <h2 className=" text-2xl md:text-5xl lg:text-4xl  font-bold text-gray-800 my-8 mx-4 md:mx-20 lg:mx-20 mt-12">
            Total a pagar ${totalFinal}
          </h2>
          <div className="flex gap-5 justify-center items-center">
            <a
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              href="/"
            >
              Volver al Listado
            </a>
            <a
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-900"
              href="/FinalizarCompra"
            >
              Terminar Compra
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MisCompras;
