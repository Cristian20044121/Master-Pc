import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex justify-center min-h-screen bg-gray-100"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-95vw  max-w-screen-2xl flex items-center gap-20">
        <div className="flex-shrink-0 bg-purple-800 p-8  ">
          <div className='flex items-center gap-2'>
          <motion.img
            whileHover={{ scale: 1.1 }}
            src="https://placekitten.com/200/200"
            alt="Perfil"
            className="w-75 h-32 rounded-full shadow-lg"
          />
            <h2 className="text-xl font-semibold"><i>Nombre del Usuario</i></h2> <br/>

          </div>
          <div className="mt-4">
            <p className="text-black border w-40 rounded-full p-2 text-center bg-white"><i>COLOMBIA</i></p><br/>
            <p className="text-black border w-40 rounded-full p-2 text-center bg-white"><i>MEDELLIN</i></p><br/>
            <p className="text-black border w-40 rounded-full p-2 text-center bg-white"><i>+573006278192</i></p><br/>
            <p className="text-black border w-40 rounded-full p-2 text-center bg-white"><i>MASCULINO</i></p><br/>
          </div>

          <div className='mt-20 relative'>
            <button className='border p-2 button-actualizar rounded-tl-lg bg-pink-600 hover:bg-pink-800 hover:text-white transition transition-ease float-right'>
              ACTUALIZAR
            </button>
          </div>

        </div>
        <div className="flex-1">
          <p className="text-2xl font-bold mb-4">
            ¡Bienvenido a la sección de edición de perfil de Master PC!
          </p>
          <p className="text-lg text-gray-600">
            Estamos encantados de que estés aquí para personalizar tu experiencia con nosotros. Tu perfil es el reflejo de tus preferencias y necesidades tecnológicas, y estamos comprometidos en asegurarnos de que cada visita a nuestra tienda en línea sea una experiencia hecha a tu medida.
          </p>
          <p className="text-lg text-gray-600">
            A través de esta plataforma, puedes actualizar tu información personal, ajustar tus preferencias de comunicación y mantener al día tus detalles de contacto. Aprovecha esta oportunidad para garantizar que estés siempre al tanto de las últimas ofertas, promociones y lanzamientos de productos que se adapten perfectamente a tu estilo de vida digital.
          </p>
          <p className="text-lg text-gray-600">
            ¡Gracias por ser parte de la comunidad Master PC y por permitirnos acompañarte en tu viaje tecnológico!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
