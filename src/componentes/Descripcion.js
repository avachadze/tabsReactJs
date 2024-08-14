import React from 'react'

function Descripcion({ setToggle, addClass }) {
    function updateToggle() {
        setToggle(2)
        addClass(2)
        addClass(false)
    }
    return (
        <div className='text-start'>
            <div className='border-b border-cyan-400 w-full pb-5'>
                <h2 className='text-2xl font-semibold text-white'>
                    Descripcion
                </h2>
                <span className='text-white'>
                    detalles importantes
                </span>
            </div>
            <div>
                <h3 class="mb-4 font-semibold  text-white">Idiomas</h3>
                <ul class="w-48 text-sm font-medium   border  rounded-lg bg-gray-700 border-gray-600 text-white">
                    <li class="w-full border-b  rounded-t-lg border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 d" />
                            <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium  text-gray-300">Español</label>
                        </div>
                    </li>
                    <li class="w-full border-b  rounded-t-lg border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                            <label for="react-checkbox" class="w-full py-3 ms-2 text-sm font-medium  text-gray-300">English</label>
                        </div>
                    </li>
                    <li class="w-full border-b  rounded-t-lg border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2" />
                            <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium  text-gray-300">Portugués</label>
                        </div>
                    </li>
                </ul>
                <div className=' mt-3'>
                    <label for="nombre_pagina" class="block mb-2 text-sm font-medium  text-white">Nombre del programa </label>
                    <input type="text" id="nombre_pagina" class=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Introduce el nombre de la página" required />
                </div>
                <div className=' mt-3'>
                    <label for="message" class="block mb-2 text-sm font-medium text-white">Pequeña descripcion</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Esta caja es solo para una breve descripción turistica"></textarea>
                </div>
            </div>
            <div className='mt-3 flex justify-end w-full'>
                <button className='bg-cyan-500 text-white font-semibold p-4 rounded' onClick={updateToggle}>
                    Continuar
                </button>
            </div>
        </div>
    )
}

export default Descripcion