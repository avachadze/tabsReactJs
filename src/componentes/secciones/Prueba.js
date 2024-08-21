import React from 'react'
import { IoIosHappy } from "react-icons/io";

function Prueba({ buscar,actual, next }) {

  return (
    <div className=' text-black  dark:text-white'>
      <div className='text-3xl'> <IoIosHappy />
        <div className='bg-slate-200  dark:bg-slate-700 my-3'>
          AAAAAAAAA
        </div>
      </div>
      <button type="button" onClick={() => next(buscar(actual))} className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
        Empezar
      </button>
    </div>
  )
}

export default Prueba