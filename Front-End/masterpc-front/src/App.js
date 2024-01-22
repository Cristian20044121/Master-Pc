import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import MisCompras from "./components/MisCompras/MisCompras";
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/MisCompras" element={<MisCompras />} />
          <Route exact path="/Contacto" element={<Contacto />} />
          <Route exact path="/Nosotros" element={<Nosotros />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="//ItemDetail/:productId" element={<ItemDetail />} />
        </Routes>
      </Router>

      {/* footer  */}
      <footer className="bg-purple-800 text-white mt-28">
        <div className="flex flex-col md:flex-row justify-between items-center p-2">
          <div className="mb-4 md:mb-0">
            <a href="/">
              <img
                className="w-40 rounded-md m-5 cursor-pointer"
                src="https://static.wixstatic.com/media/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png/v1/fit/w_2500,h_1330,al_c/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* links */}
          <div className="text-center mb-4 md:mb-0">
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Inicio
            </a>
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/MisCompras"
            >
              Mis Compras
            </a>
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/Nosotros"
            >
              Nosotros
            </a>
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/Contacto"
            >
              Contacto
            </a>
          </div>

          {/* links 2  */}
          <div className="text-center mb-4 md:mb-0">
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Políticas De Seguridad
            </a>
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Términos Y Condiciones
            </a>
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Accesibilidad
            </a>
            <a
              className="link block text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Ayuda
            </a>
          </div>

          {/* links redes  */}
          <div className="flex mb-4 md:mb-0">
            <a
              className="link text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              <i className="bx bxl-facebook-circle text-5xl"></i>
            </a>
            <a
              className="link text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              <i className="bx bxl-instagram-alt text-5xl"></i>
            </a>
            <a
              className="link text-xl text-black hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              <i className="bx bxl-twitter text-5xl"></i>
            </a>
          </div>
        </div>

        <p className="text-center mt-8">&copy; Masters Pc 2023</p>
      </footer>
    </>
  );
}

export default App;
