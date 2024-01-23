import React from 'react'
import { GrSubtract } from "react-icons/gr";
import { IoMdAddCircle } from "react-icons/io";

const Itemcount = () => {
  let cantidad = 0;

    const aumentar = () =>{
        if(cantidad < 0) {
            cantidad += 1;
            console.log("aumenta")
        }
    }
    const disminuir = () =>{
        if(cantidad > 0) {
            cantidad -= 1;
        }
    }

  return (
    <div className='count flex gap-5 p-5'>
      <button className='text-2xl' onClick={disminuir}><GrSubtract/></button>
      <p>{cantidad}</p>
      <button className='text-2xl' onClick={aumentar}><IoMdAddCircle/></button>
    </div>
  )
}

export default Itemcount
