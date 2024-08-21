import React from 'react'

function Incluido({ buscar,actual, next }) {
    return (
        <div className='text-start'>



            <div className='text-start dark:text-white flex justify-end'>
                <button type="button" onClick={() => next(buscar(actual))} className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
                    Prueba
                </button>
            </div>

        </div>
    )
}

export default Incluido