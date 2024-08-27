import React from 'react'

function Inicio({ buscar, actual, next }) {

    return (
        <div className='flex justify-end dark:text-white'>
            
            <button type="button" onClick={() => next(buscar(actual))} className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
                Empezar
            </button>
        </div>
    )
}

export default Inicio