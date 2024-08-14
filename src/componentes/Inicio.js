import React from 'react'

function Inicio({setToggle, addClass}) {
    function updateToggle(){
        setToggle(1)
        addClass(1)
        addClass(false)
    }
    return (
        <div className='text-start'>
            <div className='border-b border-cyan-400 w-full pb-5'>
                <h2 className='text-2xl font-semibold text-white'>
                    Bienvenido al programa de carga de Viajes
                </h2>
                <span className='text-white'>
                    Selecciona lo que quieras hacer
                </span>
            </div>
            <div className='mt-3 flex justify-end w-full'>
                <button className='bg-cyan-500 text-white font-semibold p-4 rounded' onClick={updateToggle}>
                    Nuevo Viaje
                </button>
            </div>
        </div>
    )
}

export default Inicio