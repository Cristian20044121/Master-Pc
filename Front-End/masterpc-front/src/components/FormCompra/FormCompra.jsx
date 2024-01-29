import React from "react";
import Swal from "sweetalert2";


const FormCompra = () => {
    /**
   * Crea alerta de borrado correctamente
   */
  const Toast = () => {
    Swal.fire({
        title: "Estas seguro de enviar la información. Recuerda completar todos los campos",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sí",
        denyButtonText: `No`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  };

 

  return (
    <div>
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-800 my-8 mx-4 md:mx-20 lg:mx-20 mb-6">Terminar Tu Compra</h1>
      <div className="bg-purple-700 py-32 px-10 min-h-screen text-xl">
        <form className="md:w-1/2 mx-auto">
        <fieldset>
        <legend className="pl-2 font-semi-bold"> <i>Información Personal</i></legend>
          <div className="shadow-xl">
            <div className="flex items-center bg-purple-400 rounded-t-lg border-b border-purple-500">
              <label
                for="name"
                className="w-20 text-right mr-8 text-purple-200"
              >
                Nombre
              </label>

              <input
                type="text"
                required
                placeholder="Tu nombre aqui!"
                className="flex-1 bg-transparent p-4 pl-0 placeholder-white-300 outline-none text-white"
              />
            </div>
          </div>

          <div className="shadow-xl">
            <div className="flex items-center bg-purple-400  border-b border-purple-500">
              <label
                for="Tel"
                className="w-20 text-right mr-8 text-purple-200"
              >
                Télefono:
              </label>

              <input
                type="number"
                required
                placeholder="+573125008975" spellCheck
                className="flex-1 bg-transparent p-4 pl-0 placeholder-white-300 outline-none text-white"
              />
            </div>

          </div>

          <div className="shadow-xl">
            <div className="flex items-center bg-purple-400  border-b border-purple-500">
              <label
                for="Email"
                className="w-20 text-right mr-8 text-purple-200"
              >
                Email:
              </label>

              <input
                type="email"
                required
                placeholder="user@"
                className="flex-1 bg-transparent p-4 pl-0 placeholder-white-300 outline-none text-white"
              />
            </div>

          </div>

          <div className="shadow-xl">
            <div className="flex items-center bg-purple-400  border-b border-purple-500">
              <label
                for="Ciudad"
                className="w-20 text-right mr-8 text-purple-200"
              >
                Ciudad:
              </label>

              <input
                type="text"
                required
                placeholder="Isla bonita"
                className="flex-1 bg-transparent p-4 pl-0 placeholder-white-300 outline-none text-white"
              />
            </div>

          </div>

          <div className="shadow-xl">
            <div className="flex items-center bg-purple-400 rounded-b-lg  border-b border-purple-500">
              <label
                for="Direccion"
                className="w-20 text-right mr-8 text-purple-200 "
              >
                Dirección:
              </label>

              <input
                type="text"
                required
                placeholder="c. #45-56"
                className="flex-1 bg-transparent p-4 pl-0 placeholder-white-300 outline-none text-white"
              />
            </div>

          </div>
</fieldset>
<div className="flex gap-5 justify-center items-center mt-12">
            <a
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              href="/Miscompras"
            >
              Volver al carrito
            </a>
            <input
            type="submit"
            onClick={Toast}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-green-900"
             />
            
          </div>


        </form>

        
      </div>
    </div>
  );
};

export default FormCompra;
