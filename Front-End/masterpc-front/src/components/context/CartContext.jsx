import {useState, createContext, useEffect} from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext()



const init = JSON.parse(localStorage.getItem('carrito')) || [];
export const CartProvider = ({children}) =>{


    const [carrito, setCarrito] = useState(init)

    useEffect(() =>{
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito])    
    
    const agregarAlCarrito = (item) =>{
        setCarrito([...carrito, item])
    }


    const calcularCantidad = () =>{
        return carrito.reduce((acc, prod) => acc + prod.counter, 0)
    }

    const precioTotal = () =>{
        return carrito.reduce((acc, prod) => {
        if(prod.price !== undefined && prod.counter !== undefined && typeof prod.price === 'number' && typeof prod.counter === 'number'){
            return acc + prod.price * prod.counter;
        }
        return acc
        }, 0)
    }
    
    const vaciarCarrito = () =>{
        setCarrito([])
    }
    const removerItem = (itemId) =>{
            const newCart = carrito.filter((prod) => prod.id !== itemId)
            setCarrito(newCart)
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Producto eliminado",
                showConfirmButton: false,
                timer: 800
              });
        }
    
    return(
        <CartContext.Provider value={{
            vaciarCarrito,
            agregarAlCarrito,
            removerItem,
            calcularCantidad,
            carrito,
            precioTotal
        }}>
         {children}   
        </CartContext.Provider>
    )

}
        
            