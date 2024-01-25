import React, { useState } from 'react';
import { GrSubtract } from 'react-icons/gr';
import { IoMdAddCircle } from 'react-icons/io';

const Itemcount = () => {
  const [cantidad, setCantidad] = useState(0);

  const aumentar = () => {
    setCantidad((prevCantidad) => prevCantidad + 1);
    console.log('Aumenta');
  };

  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad((prevCantidad) => prevCantidad - 1);
    }
  };

  return (
    <div className='count flex gap-5 p-5'>
      <button className='text-2xl' onClick={disminuir}>
        <GrSubtract />
      </button>
      <p>{cantidad}</p>
      <button className='text-2xl' onClick={aumentar}>
        <IoMdAddCircle />
      </button>
    </div>
  );
};

export default Itemcount;
