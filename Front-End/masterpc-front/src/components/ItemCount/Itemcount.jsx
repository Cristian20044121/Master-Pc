import React, { useState } from 'react';
import { GrSubtract } from 'react-icons/gr';
import { IoMdAddCircle } from 'react-icons/io';

const Itemcount = ({ price, onSubtotalChange, onTotalFinalChange }) => {
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(onSubtotalChange);

  const aumentar = () => {
    setCantidad((prevCantidad) => {
      const newCantidad = prevCantidad + 1;
      const newTotal = newCantidad * price;
      setTotal(newTotal);
      onSubtotalChange(newTotal);

      // Actualiza el total final en el componente padre
      onTotalFinalChange(newTotal + price);

      return newCantidad;
    });
  };

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
