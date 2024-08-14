import React from 'react'

function Descripcion({ setToggle }) {
    function updateToggle() {
        setToggle(2)
  
    }
    return (
        <div className='text-start'>
            <div>
                <h3 className="mb-4 font-semibold  text-white">Idiomas</h3>
                <ul className="w-48 text-sm font-medium   border  rounded-lg bg-gray-700 border-gray-600 text-white">
                    <li className="w-full border-b  rounded-t-lg border-gray-600">
                        <div className="flex items-center ps-3">
                            <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 d" />
                            <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium  text-gray-300">Español</label>
                        </div>
                    </li>
                    <li className="w-full border-b  rounded-t-lg border-gray-600">
                        <div className="flex items-center ps-3">
                            <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " />
                            <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium  text-gray-300">English</label>
                        </div>
                    </li>
                    <li className="w-full border-b  rounded-t-lg border-gray-600">
                        <div className="flex items-center ps-3">
                            <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2" />
                            <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium  text-gray-300">Portugués</label>
                        </div>
                    </li>
                </ul>
                <div className=' mt-3'>
                    <label htmlFor="nombre_pagina" className="block mb-2 text-sm font-medium  text-white">Nombre del programa </label>
                    <input type="text" id="nombre_pagina" className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Introduce el nombre de la página" required />
                </div>
                <div className=' mt-3'>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Pequeña descripcion</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Esta caja es solo para una breve descripción turistica"></textarea>
                </div>
            </div>
         
        </div>
    )
}

export default Descripcion