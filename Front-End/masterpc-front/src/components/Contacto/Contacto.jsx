import React from 'react'
import { motion } from 'framer-motion';
import Swal from "sweetalert2";

const Contacto = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const modal = ()=>{
    const { value: formValues } =  Swal.fire({
      title: "Agrega tu información",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nombre">
        <input id="swal-input2" class="swal2-input" placeholder="Email">
        <input id="swal-input3" class="swal2-input" placeholder="télefono +533443">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
          document.getElementById("swal-input3").value,
        ];
      }
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white min-h-screen flex items-center justify-center"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">¡Contáctanos!</h2>
        <p className="text-lg mb-8">
          ¿Tienes preguntas, sugerencias o simplemente quieres saludar? Estamos aquí para ayudarte. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={modal}
          className="bg-green-500 text-gray-800 py-3 px-6 rounded-full hover:bg-green-600 transition duration-300"

        >
          ¡Contactar Ahora!
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Contacto
