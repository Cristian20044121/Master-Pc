import React, { useState } from 'react';
import { GrSubtract } from 'react-icons/gr'; //librería de iconos 
import { IoMdAddCircle } from 'react-icons/io'; //librería de iconos

const Itemcount = ({ price, onSubtotalChange, onTotalFinalChange }) => {
  const [cantidad, setCantidad] = useState(0); //estado para manejar nuestro contador(inicia en 0)
  const [total, setTotal] = useState(onSubtotalChange); //estado que va cambiando el subtotal del producto

  /**
   * función para manejar contador y realizar operaciones para el total del precio a pagar
   */
  const aumentar = () => {
    /**
     * se recibe el parametro de cantidad registrada por el usuario y se multiplica por el precio para devolver un total
     */
    setCantidad((prevCantidad) => {
      const newCantidad = prevCantidad + 1;
      const newTotal = newCantidad * price;
      setTotal(newTotal);
      onSubtotalChange(newTotal);

      // Actualiza el total final en el componente padre
      onTotalFinalChange(newTotal + price);

      return newCantidad; //retorna cantidad 
    });
  };

  /**
   * función para disminuir cantidad y realiza debidas operaciones para coincidir el precio con la disminución 
   */
  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad((prevCantidad) => {
        const newCantidad = prevCantidad - 1;
        const newTotal = newCantidad * price;
        setTotal(newTotal);
        onSubtotalChange(newTotal);

        // Actualiza el total final en el componente padre
        onTotalFinalChange(newTotal + price);

        return newCantidad;
      });
    }
  };

  return (
    <div>
      <div className='count flex gap-5 p-5 justify-center items-center'>
        <button className='text-2xl' onClick={disminuir}>
          <GrSubtract /> 
        </button>
        <p>{cantidad}</p>
        <button className='text-2xl' onClick={aumentar}>
          <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
};

export default Itemcount;
