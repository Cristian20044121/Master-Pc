import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Inicio = () => {
  //estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  const [inputNombre, setNombre] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);




  const [itemsPerPage] = useState(15);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/products");

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

    obtenerProductos();
  }, []);


  const handleInputChange = (event) => {
    setNombre(event.target.value);
    setCurrentPage(1); // Reset current page when input changes
  };


  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value.trim(); // Trim to remove any extra whitespaces
    console.log("Selected Category:", selectedValue); // Add this line for debugging
    setSelectedCategory(selectedValue);
    setCurrentPage(1); // Reset current page when category changes
  };

  // ...

  const filteredProductos = productos.filter(
    (producto) => {
      const categoryMatches = selectedCategory === "" || producto.category.toString() === selectedCategory.toString();
      const nameMatches = inputNombre === "" || producto.name.toLowerCase().includes(inputNombre.toLowerCase());

      console.log("Category Matches:", categoryMatches); // Add this line for debugging
      console.log("Name Matches:", nameMatches); // Add this line for debugging

      return categoryMatches && nameMatches;
    }
  );




  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts =
    currentPage === 1
      ? filteredProductos.slice(0, itemsPerPage)
      : filteredProductos.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    // introduccion
    // border-2 border-red-500


    <div>
      <div class="flex flex-col md:flex-row w-full justify-between mt-28 p-5">
        <div class="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p>
            ¡Bienvenido a Master PC, tu destino definitivo para todo lo
            relacionado con la tecnología! Nos enorgullece ofrecerte una amplia
            gama de productos de alta calidad, desde potentes computadoras hasta
            accesorios innovadores que mejorarán tu experiencia digital.
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
            value={inputNombre}
            onChange={handleInputChange}
            placeholder="Buscar Producto 🔍"
          />
          <select
            name=""
            id=""
            className="bg-blue-800 text-white rounded p-3 md:p-5 cursor-pointer md:mt-0"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">SELECT.CATEGORIA</option>
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
              {filteredProductos.map((producto) =>
                parseInt(producto.category, 10) >= 1 &&
                  parseInt(producto.category, 10) <= 10 &&
                  (producto.category.toString() === selectedCategory.toString() ||
                    selectedCategory === "-1") ? (
                  <div
                    key={producto.id}
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
                        <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" to={`/ItemDetail/${producto._id}`}>

                          Ver Más Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null
              )}

              <div className="flex flex-wrap justify-between gap-20 w-50 mx-auto">
                {currentProducts.map((producto) => (
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
                      <span className="text-sm font-semibold text-gray-700">Precio:</span>
                      <span className="text-xl font-bold text-gray-800">
                        ${producto.price}
                      </span>
                    </div>

                    <div className="px-6 pt-2 pb-4">
                      <span className="text-sm font-semibold text-gray-700">Stock:</span>
                      <span className="text-md text-gray-800"> {producto.stock}</span>
                    </div>

                    <div className="px-6 pb-4">
                      <span className="text-sm font-semibold text-gray-700">
                        Categoría:
                      </span>
                      <span className="text-md text-gray-800"> {producto.category}</span>
                    </div>

                    <div className="px-6 pb-4">
                      <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800" to={`/ItemDetail/${producto._id}`}>
                        Ver Más Detalles
                      </Link>
                    </div>
                  </div>
                ))}
              </div>


            </div>

          </div>
        </div>

        {/* Pagination buttons */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(filteredProductos.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-2 bg-purple-800 text-white rounded ${currentPage === index + 1 ? "bg-opacity-80" : ""
                }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Inicio;
