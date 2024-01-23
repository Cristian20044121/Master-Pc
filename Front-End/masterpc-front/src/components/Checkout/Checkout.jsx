import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


export const Checkout = () => {

    const { vaciarCarrito } = useContext(CartContext);

    const [ordenId, setOrdenId] = useState('')

    const [formData, setFormData] = useState({
        email: '',
        nombre: '',
        apellido: '',
        telefono: ''
    });

    


    const generarOrden = () => {
        //Generar un numero random para simular un id de orden

        const randomId = Math.floor(Math.random() * 1000000);

        setOrdenId(randomId)

        setFormData({
            email: '',
            nombre: '',
            apellido: '',
            telefono: ''
        })

      
    }


    const handleSubmit = (e) => {

        console.log("Formulario enviado")

        e.preventDefault();

        generarOrden();

        vaciarCarrito();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Orden generada con éxito, si lo desea copie el número en pantalla",
            showConfirmButton: false,
            timer: 1000
          });

    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    // const copiarOrden = () =>{
    //     navigator.clipboard.writeText(ordenId.toString())
    //             .then(() =>{
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "¡Número de orden copiado satisfactoriamente!",
    //                     showConfirmButton: false,
    //                     timer: 700
    //                   });
    //             })
    //             .catch(() =>{
    //                     Swal.fire({
    //                         position: "top-end",
    //                         icon: "error",
    //                         title: "¡Error al copiar el número de orden!",
    //                         showConfirmButton: false,
    //                         timer: 700
    //                       });
    //             })
    // }






    return (
        <div className="container">
            <h3>Terminar compra</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text"
                        className="form-control"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="teléfono">Télefono</label>
                    <input type="number"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <button type="submit" className="btn btn-success">Finalizar compra</button>
                    <Link className="btn btn-info" to="/cart">Volver al carrito</Link>
                </div>
            </form>

            {
                ordenId && (
                    <div className="mt-4">     
                    <h5>¡Orden generada con éxitos!</h5>
                    <p>Número de orden: {ordenId}</p>
                    </div>
                )
            }

        </div>
    )
}
{/* {
    showModal && (
        <div className="modal show" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5>Orden generada</h5>
                        <button type="button"
                        className="close"
                        onClick={() => setShowModal(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            <p>Número de orden: {ordenId}</p>
                            <p>Email: {formData.email}</p>
                            <p>Nombre: {formData.nombre}</p>
                            <p>Apellido: {formData.apellido}</p>
                            <p>Teléfono: {formData.telefono}</p>
                            <button onClick={copiarOrden} className="btn btn-primary">
                                Copiar número de orden
                            </button>
                    </div>
                    <div className="modal-footer">
                            <button 
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setShowModal(false)}
                            >
                            Cerrar
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
} */}