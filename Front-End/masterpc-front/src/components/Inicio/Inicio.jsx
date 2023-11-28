import React, { useEffect, useState } from "react";

const Inicio = () => {
  //estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        // solicitud http al back-end
        const response = await fetch("http://localhost:3001/api/products");
        console.log(response);

        // const response = await fetch('http://localhost:3000/api/productss')

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // actualizar el estado con los productos obtenidos
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

  return (
    // introduccion
    // border-2 border-red-500
    <div>
      <div className="flex w-95 justify-between mt-28 p-5">
        {/* parrafo introductorio  */}
        <div className=" w-1/2 text-center">
          <p>
            ¡Bienvenido a Master PC, tu destino definitivo para todo lo
            relacionado con la tecnología! Nos enorgullecemos de ofrecerte una
            amplia gama de productos de alta calidad, desde potentes
            computadoras hasta accesorios innovadores que mejorarán tu
            experiencia digital.
          </p>
        </div>

        {/* images  */}
        <div className=" flex w-50 h-40">
          <img
            className="w-50"
            src="https://static.wixstatic.com/media/93fb42_1e9fa5872d564640b2808295c3ea7b3c~mv2.png/v1/fill/w_441,h_294,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93fb42_1e9fa5872d564640b2808295c3ea7b3c~mv2.png"
            alt="image of product"
          />
          <img
            className="w-50 h-40"
            src="https://static.wixstatic.com/media/93fb42_f2b6a4ef742e47b881941cc52fbc3fec~mv2.png/v1/crop/x_259,y_153,w_1406,h_776/fill/w_247,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Sin-t%C3%ADtulo-2.png"
          />
        </div>
      </div>

      <section class="container-info flex flex-col lg:flex-row mt-28 p-8 bg-gray-300 justify-around">
    <div class="w-full lg:w-48 flex flex-col justify-center items-center mb-4 lg:mb-0 sm:flex-row sm:justify-start">
        <p class="text-5xl lg:text-7xl mb-2"><i class='bx bx-car'></i></p>
        <p class="text-lg lg:text-base text-center sm:text-left">Entrega segura</p>
    </div>

    <div class="w-full lg:w-48 flex flex-col justify-center items-center mb-4 lg:mb-0 sm:flex-row sm:justify-start">
        <p class="text-5xl lg:text-7xl mb-2"><i class='bx bx-package'></i></p>
        <p class="text-lg lg:text-base text-center sm:text-left">Envío gratis en compras de más de $20.000</p>
    </div>

    <div class="w-full lg:w-48 flex flex-col justify-center items-center mb-4 lg:mb-0 sm:flex-row sm:justify-start">
        <p class="text-5xl lg:text-7xl mb-2"><i class='bx bxs-discount'></i></p>
        <p class="text-lg lg:text-base text-center sm:text-left">Precios bajos garantizados</p>
    </div>

    <div class="w-full lg:w-48 flex flex-col justify-center items-center sm:flex-row sm:justify-start"> 
        <p class="text-5xl lg:text-7xl mb-2"><i class='bx bx-time'></i></p>
        <p class="text-lg lg:text-base text-center sm:text-left">Disponible para ti 24/7</p>
    </div>
</section>

      {/* products  */}
      <div className="mt-28">
        {/* buttons  */}
        <div className=" w-1/2 flex justify-between mx-auto">
          <input
            className="bg-blue-800 text-white rounded p-5"
            type="text"
            placeholder="Buscar Producto 🔍"
          />
          <select
            name=""
            id=""
            className="bg-blue-800 text-white rounded p-5 cursor-pointer"
          >
            <option value="0">CATEGORIA</option>
          </select>

          <div className="flex">
            <button className="bg-purple-800 rounded p-2 h-10 text-white m-2">
              1
            </button>
            <button className="bg-purple-800 rounded p-2 h-10 text-white m-2">
              2
            </button>
            <button className="bg-purple-800 rounded p-2 h-10 text-white m-2">
              3
            </button>
            <button className="bg-purple-800 rounded p-2 h-10 text-white m-2">
              4
            </button>
          </div>
        </div>

        {/* container cards  */}
        <div className="bg-black p-5 mt-10">
          <h2 className="text-white text-6xl text-center m-20">Nuestros Productos De Alta Calidad</h2>
          <div className="flex flex-wrap justify-between gap-20 w-50 mx-auto">
              {productos.map((producto) => (
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
                    <p class="mt-2 text-gray-600">{producto.longDescription}</p>
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
                    <span class="text-md text-gray-800"> {producto.stock}</span>
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
                    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>


    



    </div>
  );
};

export default Inicio;
