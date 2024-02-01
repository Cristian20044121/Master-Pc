import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; //libreria motion(animacion)

const Inicio = () => {
  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  //estado para almacenar los productos
  const [productos, setProductos] = useState([]); //estado para mostrar los productos
  const [inputNombre, setNombre] = useState(""); //estado para la busqueda por nombre de un producto
  const [selectedCategory, setSelectedCategory] = useState(""); //estado para filtrar producto por categoria
  const [currentPage, setCurrentPage] = useState(1); //estado para la paginación de los productos
  const [itemsPerPage] = useState(15); //estado para mostrar cierta cantidad de productos por paginación

  /**
   * manejo de funcion asincronica para hacer petición a la API para obtener los productos
   */
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(
          "https://api-masterpc.onrender.com/api/products" //URL API
        );

        if (response.ok) {
          const data = await response.json();
          setProductos(data);
        } else {
          console.error("Error al obtener los productos");
        }
      } catch (err) {
        console.error("Error de red:", err);
      }
    };

    obtenerProductos(); //Función que nos devuelve los productos
  }, []);

  /**
   * Función que captura la información registrada por el usuario para filtrar por nombre un producto
   * @param {*} event //captura lo registrado por el usuario
   */
  const handleInputChange = (event) => {
    setNombre(event.target.value);
    setCurrentPage(1); // Reset current page when input changes
  };

  /**
   * Función que captura la información registrada por el usuario a travez de un select para filtrar por categoria un producto
   * @param {*} event //captura lo registrado por el usuario
   */
  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value.trim(); // Trim to remove any extra whitespaces
    console.log("Selected Category:", selectedValue); // Add this line for debugging
    setSelectedCategory(selectedValue);
    setCurrentPage(1); // Reset current page when category changes
  };

  // ...

  /**
   * Función para filtrar productos por categoria, por nombre y ser renderizados
   */
  const filteredProductos = productos.filter((producto) => {
    //filtrado por categoria
    const categoryMatches =
      selectedCategory === "" ||
      producto.category.toString() === selectedCategory.toString();

    //filtrado por nombre de producto
    const nameMatches =
      inputNombre === "" ||
      producto.name.toLowerCase().includes(inputNombre.toLowerCase());

    console.log("Category Matches:", categoryMatches); // Add this line for debugging
    console.log("Name Matches:", nameMatches); // Add this line for debugging

    return categoryMatches && nameMatches; //retorna los resultados
  });

  //calculan los índices del último y primer producto en la página actual, respectivamente.
  const indexOfLastProduct = currentPage * itemsPerPage; // calcula el índice del último producto en la página multiplicando el número de la página actual (currentPage) por la cantidad de productos por página (itemsPerPage).
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage; //calcula el índice del primer producto en la página restando la cantidad de productos por página.

  /**
   * es un array que contiene los productos que se mostrarán en la página actual. Utiliza la operación ternaria (? :) para decidir cómo obtener los productos en función de la página actual:
   * Si currentPage es 1, se obtienen los primeros itemsPerPage productos directamente desde filteredProductos.
   * Si currentPage es mayor que 1, se obtienen los productos desde indexOfFirstProduct hasta indexOfLastProduct desde filteredProductos.
   */
  const currentProducts =
    currentPage === 1
      ? filteredProductos.slice(0, itemsPerPage)
      : filteredProductos.slice(indexOfFirstProduct, indexOfLastProduct);

  //toma un número de página como argumento y actualiza la página actual (setCurrentPage) con ese número
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <motion.div variants={sectionVariants} initial="hidden" animate="visible">
      <div class="flex flex-col md:flex-row w-full justify-between mt-28 p-5">
        <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p>
            ¡Bienvenido a Master PC, tu destino definitivo para todo lo
            relacionado con la tecnología! Nos enorgullece brindarte una extensa
            variedad de productos de alta calidad. Desde potentes computadoras
            hasta accesorios innovadores, estamos aquí para mejorar tu
            experiencia digital y llevarte al siguiente nivel tecnológico.
            ¡Explora nuestras ofertas y sumérgete en el emocionante mundo de la
            tecnología con nosotros!
          </p>
        </div>

        {/* <!-- Images --> */}
        <div class="flex w-full md:w-1/2 mt-10 md:mt-0 relative">
          <img
            class="w-1/2 h-40 md:w-3/5 lg:w-1/2 xl:w-1/2"
            src="https://static.wixstatic.com/media/93fb42_f2b6a4ef742e47b881941cc52fbc3fec~mv2.png/v1/crop/x_259,y_153,w_1406,h_776/fill/w_247,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sin-t%C3%ADtulo-2.png"
            alt="image of product"
          />

          <img
            class="w-1/2 md:w-2/5 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0"
            src="https://static.wixstatic.com/media/93fb42_1e9fa5872d564640b2808295c3ea7b3c~mv2.png/v1/fill/w_441,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93fb42_1e9fa5872d564640b2808295c3ea7b3c~mv2.png"
            alt="image of product"
          />
        </div>
      </div>

      <section class="container-info flex flex-col lg:flex-row mt-28 p-8 bg-gray-300 justify-around">
        <div class="w-full lg:w-48 flex flex-col justify-center items-center mb-4 lg:mb-0 sm:flex-row sm:justify-start">
          <p class="text-5xl lg:text-7xl mb-2">
            <i class="bx bx-car"></i>
          </p>
          <p class="text-lg lg:text-base text-center sm:text-left">
            Entrega segura
          </p>
        </div>

        <div class="w-full lg:w-48 flex flex-col justify-center items-center mb-4 lg:mb-0 sm:flex-row sm:justify-start">
          <p class="text-5xl lg:text-7xl mb-2">
            <i class="bx bx-package"></i>
          </p>
          <p class="text-lg lg:text-base text-center sm:text-left">
            Envío gratis en compras de más de $20.000
          </p>
        </div>

        <div class="w-full lg:w-48 flex flex-col justify-center items-center mb-4 lg:mb-0 sm:flex-row sm:justify-start">
          <p class="text-5xl lg:text-7xl mb-2">
            <i class="bx bxs-discount"></i>
          </p>
          <p class="text-lg lg:text-base text-center sm:text-left">
            Precios bajos garantizados
          </p>
        </div>

        <div class="w-full lg:w-48 flex flex-col justify-center items-center sm:flex-row sm:justify-start">
          <p class="text-5xl lg:text-7xl mb-2">
            <i class="bx bx-time"></i>
          </p>
          <p class="text-lg lg:text-base text-center sm:text-left">
            Disponible para ti 24/7
          </p>
        </div>
      </section>

      {/* products  */}
      <div className="mt-28 ">
        {/* buttons  */}
        <div className="w-full md:w-1/2 flex justify-between mx-auto flex-col md:flex-row">
          <input
            className="bg-blue-800 text-white rounded p-3 md:p-5 mb-4 md:mb-0"
            type="text"
            value={inputNombre} //captura lo escrito por el usuario
            onChange={handleInputChange} //función que captura el nombre registrado por el usuario
            placeholder="Buscar Producto 🔍"
          />
          <select
            name=""
            id=""
            className="bg-blue-800 text-white rounded p-3 md:p-5 cursor-pointer md:mt-0"
            value={selectedCategory} //captura lo seleccionado por el usuario
            onChange={handleCategoryChange} //función que captura la categoria seleccionada por el usuario
          >
            <option value="">SELECCIONAR CATEGORIA</option>
            <option value="Cpu">cpu</option>
            <option value="Mouse">Mouse</option>
            <option value="Monitores">Monitores</option>
            <option value="Cpu + monitor">Cpu + monitor</option>
            <option value="Combo">Combo</option>
            <option value="Cámaras">Cámaras</option>
            <option value="Audífonos">Audífonos</option>
            <option value="Sillas">Sillas</option>
            <option value="Micrófonos">Micrófonos</option>
            <option value="Teclados">Teclados</option>
          </select>
        </div>

        {/* container cards  */}
        <div className="bg-black p-5 mt-10">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl text-center my-8 mx-4 md:mx-20 lg:mx-20">
            {" "}
            Nuestros Productos De Alta Calidad{" "}
          </h2>
          <div className="flex flex-wrap justify-between gap-20 w-50 mx-auto">
            {/* { */}

            <div className="flex flex-wrap justify-between gap-20 w-50 mx-auto">
              {/* filtrado de productos por categoria */}
              {filteredProductos.map((producto) =>
                parseInt(producto.category, 10) >= 1 &&
                parseInt(producto.category, 10) <= 10 &&
                (producto.category.toString() === selectedCategory.toString() ||
                  selectedCategory === "-1") ? (
                  <div
                    key={producto.id} //lave primaria
                    className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
                  >
                    <div
                      key={producto.id}
                      class="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
                    >
                      <img
                        class="object-cover w-full h-48"
                        src={producto.mainPhoto}
                        alt="Producto"
                      />

                      <div class="px-6 py-4">
                        <h3 class="text-xl font-semibold text-gray-800">
                          {producto.name}
                        </h3>
                      </div>

                      <div class="px-6 pt-2 pb-2">
                        <span class="text-sm font-semibold text-gray-700">
                          Precio:
                        </span>
                        <span class="text-xl font-bold text-gray-800">
                          {" "}
                          ${producto.price}
                        </span>
                      </div>

                      <div class="px-6 pt-2 pb-4">
                        <span class="text-sm font-semibold text-gray-700">
                          Stock:
                        </span>
                        <span class="text-md text-gray-800">
                          {" "}
                          {producto.stock}
                        </span>
                      </div>

                      <div class="px-6 pb-4">
                        <span class="text-sm font-semibold text-gray-700">
                          Categoría:
                        </span>
                        <span class="text-md text-gray-800">
                          {" "}
                          {producto.category}
                        </span>
                      </div>

                      <div class="px-6 pb-4">
                        <Link
                          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                          to={`/ItemDetail/${producto._id}`}
                        >
                          Ver Más Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h2>
                    <i>Cargando Productos espera por favor</i>
                  </h2>
                )
              )}

              <div className="flex flex-wrap justify-between gap-20 w-50 mx-auto p-5">
                {currentProducts.length > 0 ? (
                  //mapeo de todos los productos existentes para ser renderizados
                  currentProducts.map((producto) => (
                    <div
                      key={producto._id}
                      className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
                    >
                      <img
                        className="object-cover w-full h-48"
                        src={producto.mainPhoto}
                        alt="Producto"
                      />

                      <div className="px-6 py-4">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {producto.name}
                        </h3>
                      </div>

                      <div className="px-6 pt-2 pb-2">
                        <span className="text-sm font-semibold text-gray-700">
                          Precio:
                        </span>
                        <span className="text-xl font-bold text-gray-800">
                          ${producto.price}
                        </span>
                      </div>

                      <div className="px-6 pt-2 pb-4">
                        <span className="text-sm font-semibold text-gray-700">
                          Stock:
                        </span>
                        <span className="text-md text-gray-800">
                          {" "}
                          {producto.stock}
                        </span>
                      </div>

                      <div className="px-6 pb-4">
                        <span className="text-sm font-semibold text-gray-700">
                          Categoría:
                        </span>
                        <span className="text-md text-gray-800">
                          {" "}
                          {producto.category}
                        </span>
                      </div>

                      <div className="px-6 pb-4">
                        <Link
                          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                          to={`/ItemDetail/${producto._id}`}
                        >
                          Ver Más Detalles
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <h2>Aguarda, los productos están cargando</h2>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination buttons */}
        {/* paginación de los productos  */}
        <div className="flex justify-center mt-4 mb-12">
          {Array.from({
            length: Math.ceil(filteredProductos.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-2 bg-purple-800 text-white rounded ${
                currentPage === index + 1 ? "bg-opacity-80" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Inicio;
