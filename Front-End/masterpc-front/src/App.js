import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Navbar from "./components/Navbar/Navbar";
import MisCompras from "./components/MisCompras/MisCompras";
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes>
      </Router>

    {/* footer  */}
      <footer className="bg-purple-800 text-white py-8 ">
        <div className="flex gap-64 mx-auto w-1/2">
          <div>
            <a href="/">
              <img
                className="w-40 rounded-md m-5 cursor-pointer"
                src="https://static.wixstatic.com/media/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png/v1/fit/w_2500,h_1330,al_c/b15536_d90815eea4364f76b370efd2a4905c97~mv2.png"
              />
            </a>
          </div>

          {/* links */}
          <div className="text-center">
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Inicio
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/MisCompras"
            >
              Mis Compras
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/Nosotros"
            >
              Nosotros
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/Contacto"
            >
              Contacto
            </a>
          </div>

          {/* links 2  */}
          <div className="text-center">
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Politícas De Seguridad
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Terminos Y Condiciones
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Accesibilidad
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              Ayuda
            </a>
          </div>
        </div>

        {/* links redes  */}
        <div className="flex">
        <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              <i class='bx bxl-facebook-circle'></i>
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              <i class='bx bxl-instagram-alt' ></i>
            </a><br/>
            <a
              className="link ml-5 text-xl hover:text-white transition duration-300 ease-in-out"
              href="/"
            >
              <i class='bx bxl-twitter' ></i>
            </a><br/>
        </div>
        <p className="text-center mt-8">&copy; Masters Pc 2023</p>
      </footer>
    </>
  );
}

export default App;
