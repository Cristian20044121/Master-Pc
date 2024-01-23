import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MisCompras = () => {

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    // Obtener productos del localStorage
    const storedCart = JSON.parse(localStorage.getItem('cartProduct')) || [];
    setCartItem(storedCart);
  }, []);

  const handleRemoveFromCart = (productIdToRemove) => {
    // Implementa la lógica para eliminar el producto del carrito.
    // Puedes utilizar el estado local para actualizar el carrito después de eliminar.
    const updatedCart = cartItem.filter(item => item.id !== productIdToRemove);
    setCartItem(updatedCart);

    // Actualizar el localStorage cuando cambie el carrito
    localStorage.setItem('cartProduct', JSON.stringify(updatedCart));
  };


  
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a tus compras</h1>

      {/* Verifica si hay productos en el carrito */}
      {cartItem.length ? (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
          {/* Muestra la información de los productos en el carrito */}
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 py-2 px-4">Imagen</th>
                <th className="border border-gray-300 py-2 px-4">Nombre</th>
                <th className="border border-gray-300 py-2 px-4">Precio</th>
                <th className="border border-gray-300 py-2 px-4">Categoría</th>
                <th className="border border-gray-300 py-2 px-4">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map(product => (
                <tr key={product._id}>
                  <td className="border border-gray-300 py-2 px-4">
                    <img src={product.mainPhoto} alt={product.name} className="w-12 h-12 object-cover" />
                  </td>
                  <td className="border border-gray-300 py-2 px-4">{product.name}</td>
                  <td className="border border-gray-300 py-2 px-4">${product.price}</td>
                  <td className="border border-gray-300 py-2 px-4">{product.category}</td>
                  <td className="border border-gray-300 py-2 px-4">
                    <button
                      className="bg-red-500 text-white rounded px-3 py-1"
                      onClick={() => handleRemoveFromCart(product._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Mensaje si no hay productos en el carrito
        <p>No hay productos en tu carrito.</p>
      )}
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
