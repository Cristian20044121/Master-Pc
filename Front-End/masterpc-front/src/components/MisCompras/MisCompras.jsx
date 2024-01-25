import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import './style.css'
import Itemcount from '../ItemCount/Itemcount';

const MisCompras = () => {

  /**
   * Crea alerta de borrado correctamente
   */
  const Toast = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto eliminado correctamente",
      showConfirmButton: false,
      timer: 1500
    });
  }


  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    // Obtener productos del localStorage
    const storedCart = JSON.parse(localStorage.getItem('cartProduct')) || [];
    setCartItem(storedCart);
  }, []);

  /**
   * 
   * @param {*elimina producto con su respectivo id} productIdToRemove 
   */
  const handleRemoveFromCart = (productIdToRemove) => {
    console.log(productIdToRemove)

    const updatedCart = cartItem.filter(item => item.id !== productIdToRemove);
    setCartItem(updatedCart);
    Toast();
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };

  return (
    <div className='section-one p-5'>
    <div className="container mx-auto my-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800 my-8 mx-4 md:mx-20 lg:mx-20 mb-6">¡Bienvenido a tus compras!</h1>
      <h2 className="text-2xl md:text-5xl lg:text-4xl  font-bold text-gray-800 my-8 mx-4 md:mx-20 lg:mx-20 mt-12">Descripción de productos agregados</h2>
      

      <table className="max-w-full bg-white border border-gray-300 mt-28">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2 px-4">Imagen</th>
            <th className="border border-gray-300 py-2 px-4">Nombre</th>
            <th className="border border-gray-300 py-2 px-4">Precio</th>
            <th className="border border-gray-300 py-2 px-4">Categoría</th>
            <th className="border border-gray-300 py-2 px-4">Cantidad</th>
            <th className="border border-gray-300 py-2 px-4">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItem.length ? (
            cartItem.map(product => (
              <tr key={product.id}>
                <td className="border border-gray-300 py-2 px-4 flex items-center justify-center">
                  <img src={product.mainPhoto} alt={product.name} className="w-12 h-20 object-cover" />
                </td>
                <td className="border border-gray-300 py-2 px-4">{product.name}</td>
                <td className="border border-gray-300 py-2 px-4">${product.price}</td>
                <td className="border border-gray-300 py-2 px-4">{product.category}</td>
                <td className="border border-gray-300 py-2 px-4">{<Itemcount/>}</td>
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

    </div>
  );
};

export default MisCompras;







  // const [products, setProducts] = useState([]);
  // const [isMounted, setIsMounted] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3001/api/products/${productId}`);
  //       if (response.ok && isMounted) {
  //         const data = await response.json();
  //         setProducts([data]); // Almacena el producto como un array en el estado
  //       } else {
  //         console.error('Error en la respuesta:', response.status, response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error en la solicitud:', error.message);
  //     }
  //   };

  //   fetchData();

  //   // Limpieza: establecer isMounted en false cuando el componente se desmonta
  //   return () => setIsMounted(false);
  // }, [productId, isMounted]);

  // if (!products.length && isMounted) {
  //   return <div className='text-center color-blue-700 text-4xl'><i>Cargando...</i></div>;
  // }

  // const handleRemoveFromCart = (productIdToRemove) => {
  //   // Implementa la lógica para eliminar el producto del carrito.
  //   // Puedes utilizar el estado local para actualizar el carrito después de eliminar.
  //   const updatedProducts = products.filter(product => product._id !== productIdToRemove);
  //   setProducts(updatedProducts);
  // };
