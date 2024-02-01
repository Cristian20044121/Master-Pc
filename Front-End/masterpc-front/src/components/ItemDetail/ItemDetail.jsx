import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"; //libreria de alertas REACT
import { motion } from "framer-motion"; //libreria motion(animacion)

const ItemDetail = () => {
  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  /**
   * Funcion que lanza alerta de succes
   */
  const Toast = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const [product, setProduct] = useState(null); //estado del producto a mostrar
  const { productId } = useParams(); //captura el parametro id registrado en la barra de url(haschange)
  const [cart, setCart] = useState([]); //estado del carrito, inicia vacio 

  /**
   * Realiza la petición a la API mandando el parametro de producto a traer
   * Nos devuelve el producto con el id previamente seleccionado
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api-masterpc.onrender.com/api/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Error al obtener el producto");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [productId]);

  /**
   * se obtiene información del carrito y se guarda en localStorage
   */
  useEffect(() => {
    // Obtener el carrito actual del localStorage
    const storedCart = JSON.parse(localStorage.getItem("cartProduct")) || [];
    setCart(storedCart); //se actualiza carrito con su info en localStorage
  }, []);

  /**
   * Construcción de objeto para agregar al array del carrito
   * @param {*} id 
   * @param {*} mainPhoto 
   * @param {*} name 
   * @param {*} price 
   * @param {*} category 
   * se obtiene la info deseada a mostrar a travez de los debidos parametros
   */
  const CartProduct = function (id, mainPhoto, name, price, category) {
    this.id = id;
    this.mainPhoto = mainPhoto;
    this.name = name;
    this.price = price;
    this.category = category;
  };

  /**
   * Función para agregar al carrito un nuevo prodcuto envuelto en un nuevo objeto
   * Se actualiza el cart en localStorage
   */
  const handleAddToCart = () => {
    Toast();

    const isProductInCart = cart.some(
      (cartItem) => cartItem.id === product._id
    );

    //mapeo de cada producto para comprar su respetivo id y verificar si es existente
    if (isProductInCart) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === product._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart); //se actualiza el carrito

      // Actualizar el localStorage después de actualizar el estado
      localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
    } else {
      const newCartItem = new CartProduct(
        product._id,
        product.mainPhoto,
        product.name,
        product.price,
        product.category
      );

      setCart((prevCart) => [...prevCart, newCartItem]);

      // Actualizar el localStorage después de actualizar el estado
      localStorage.setItem(
        "cartProduct",
        JSON.stringify([...cart, newCartItem]) //se guarda en localStorage
      );
    }
  };

  return (
    <motion.div variants={sectionVariants} initial="hidden" animate="visible">
      <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center my-8 mx-4 md:mx-20 lg:mx-20">
        ¡MASTERPC LOS MEJORES EN ESTO, CON EXCELENTES PRODUCTOS DE CALIDAD!
      </h2>

      <div
        key={product?._id}
        className="bg-white shadow-lg flex flex-col mx-auto mt-28 rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105 w-full sm:w-1/2"

      >
        <h3 className="text-2xl text-gray-800 font-semibold p-2">
          Detalles del producto seleccionado:
        </h3>
        <div className="px-6 py-4">
          <h3 className="text-4xl font-semibold text-gray-800 mb-2 text-center">
            {product?.name}
          </h3>
          <br></br>
          <p className="text-gray-600 text-2xl">{product?.longDescription}</p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-75 h-96"
            src={product?.mainPhoto}
            alt={product?.name}
          />
        </div>
        <div className="px-6 pt-2 pb-2">
          <span className="text-sm font-semibold text-gray-700 text-2xl">
            Precio:
          </span>
          <span className="text-xl font-bold text-gray-800">
            ${product?.price}
          </span>
        </div>
        <div className="px-6 pt-2 pb-4">
          <span className="text-sm font-semibold text-gray-700 text-2xl">
            Stock:
          </span>
          <span className="text-md text-gray-800 text-xl">
            {product?.stock}
          </span>
        </div>
        <div className="px-6 pb-4">
          <span className="text-sm font-semibold text-gray-700 text-2xl">
            Categoría:
          </span>
          <span className="text-md text-gray-800 text-xl">
            {product?.category}
          </span>
        </div>
        {/* Renderizar Itemcount aquí según sea necesario */}
        <div className="px-6 pb-4">
          {/* <p className='p-5'><Itemcount /></p> */}
          <div className="flex gap-5">
            <a
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              href="/"
            >
              Volver al Listado
            </a>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-8"
              onClick={() =>
                handleAddToCart(
                  product._id,
                  product?.mainPhoto,
                  product?.name,
                  product?.price,
                  product?.category
                )
              }
            >
              Agregar al carrito
            </button>
            <a
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-900"
              href="/Miscompras"
            >
              Ir Al Carrito
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemDetail;
