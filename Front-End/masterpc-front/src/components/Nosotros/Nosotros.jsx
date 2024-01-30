import React from "react";
import "./style.css";
import { motion } from "framer-motion";  //libreria motion(animacion)


const Nosotros = () => {
  /**
   * animacion libreria motion
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
      className="background flex justify-center items-center"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <div className="container mx-auto py-12">
          <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold mb-4 title-about">
              Acerca de Nosotros
            </h1>
            <p className="text-gray-600 mb-6">
              En Master PC, nos apasiona ofrecer productos tecnológicos de alta
              calidad que transforman la manera en que interactuamos con el
              mundo. Nuestra misión es proporcionar soluciones innovadoras para
              satisfacer las necesidades de nuestros clientes y mejorar su
              experiencia tecnológica.
            </p>
            <p className="text-gray-600 mb-6">
              Con años de experiencia en la industria, hemos construido una
              reputación basada en la excelencia, la integridad y el servicio al
              cliente excepcional. Nos esforzamos por mantenernos a la
              vanguardia de las últimas tendencias tecnológicas para ofrecer
              productos de última generación que superen las expectativas.
            </p>
            <p className="text-gray-600 mb-6">
              Ya sea que estés buscando equipos de última generación, accesorios
              innovadores o asesoramiento experto, en Master PC encontrarás lo
              que necesitas. ¡Únete a nosotros en nuestra misión de explorar el
              potencial infinito de la tecnología!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nosotros;
