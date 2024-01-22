import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Itemcount from '../ItemCount/Itemcount';

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${productId}`);
        if (response.ok && isMounted) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error('Error al obtener el producto');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Limpieza: establecer isMounted en false cuando el componente se desmonta
    return () => setIsMounted(false);
  }, [productId, isMounted]);

  useEffect(() => {
    // Manejar el cambio de productId aquí si es necesario
    // Puedes realizar operaciones adicionales cuando el productId cambia
    console.log('Nuevo productId:', productId);
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }
  return (
    


 <div className="bg-white  shadow-lg  flex flex-col mx-auto mt-28 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105 w-1/2">
 <div className='flex justify-center'>
      <img className=" w-96 h-auto" src={product.mainPhoto} alt={product.name}/>

        </div>
    <div className="px-6 py-4">
      <h3 className="text-4xl font-semibold text-gray-800 mb-2 text-center">{product.name}</h3><br></br>
      <p className="text-gray-600 text-2xl">{product.longDescription}</p>
    </div>

    <div className="px-6 pt-2 pb-2">
      <span className="text-sm font-semibold text-gray-700 text-2xl">Precio:</span>
      <span className="text-xl font-bold text-gray-800">${product.price}</span>
    </div>

    <div className="px-6 pt-2 pb-4">
      <span className="text-sm font-semibold text-gray-700 text-2xl">Stock:</span>
      <span className="text-md text-gray-800 text-xl">{product.stock}</span>
    </div>

    <div className="px-6 pb-4">
      <span className="text-sm font-semibold text-gray-700 text-2xl">Categoría:</span>
      <span className="text-md text-gray-800 text-xl">{product.category}</span>
    </div>

    {/* Más detalles según sea necesario */}

    <div className="px-6 pb-4">
    <p className='p-5'><Itemcount/></p>
     <div className='flex gap-5'>
     <a
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        href="/"
      >
        Volver al Listado
      </a>
      <Link className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-8' to='/'>
        Agregar al carrito
      </Link>
     </div>
    </div>
  </div>

      )
  }


export  default ItemDetail































// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// const ItemDetail = () => {
//     // Desestructurar la información del producto
//     const [product, setProduct] = useState(null);

//     const {productId} =  useParams();
//     console.log(productId)

//     useEffect(()=>{
//         const fecthData = async () =>{
//             try{
//                 const response = await fetch(`http://localhost:3001/api/products/${productId}`)
//                 if(response.ok) {
//                     const data = await response.json();
//                     setProduct(data);
                   
//                 }
//                 else{
//                     console.error('Error al obtener el producto')
//                 }
//             }catch(error){
//                 console.log(error)
//             }
//         }
//         fecthData()
//     },[productId])

    
//     // const { id, name, mainPhoto, longDescription, price, stock, category } = productId;
 

//   return (
//     <div key={product.id}>
//     <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
//       <img className="object-cover w-full h-48" src={product.mainPhoto} alt={product.name} />

//       <div className="px-6 py-4">
//         <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
//         <p className="mt-2 text-gray-600">{product.longDescription}</p>
//       </div>

//       <div className="px-6 pt-2 pb-2">
//         <span className="text-sm font-semibold text-gray-700">Precio:</span>
//         <span className="text-xl font-bold text-gray-800">${product.price}</span>
//       </div>

//       <div className="px-6 pt-2 pb-4">
//         <span className="text-sm font-semibold text-gray-700">Stock:</span>
//         <span className="text-md text-gray-800">{product.stock}</span>
//       </div>

//       <div className="px-6 pb-4">
//         <span className="text-sm font-semibold text-gray-700">Categoría:</span>
//         <span className="text-md text-gray-800">{product.category}</span>
//       </div>

//       {/* Aquí puedes agregar más detalles según sea necesario */}

//       {/* Regresar al listado de productos */}
//       <div className="px-6 pb-4">
//         <a
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
//           href="/"
//         >
//           Volver al Listado
//         </a>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default ItemDetail
