import React from 'react'
import { FaAsterisk } from "react-icons/fa";
function Descripcion({ invalid }) {
    return (
        <div className='text-start'>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="espaniol" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="espaniol" className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Español</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="ingles" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="ingles" className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">English</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="portugues" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label htmlFor="portugues" className="w-full py-3 text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Portugués</label>
                    </div>
                </li>
            </ul>
            <div className='mt-3 '>
                <div className='flex'>
                    <label htmlFor="nombre_pagina" className="mb-4 font-semibold text-gray-900 dark:text-white">Nombre del programa  </label>
                    <span className='flex items-center ml-1 -mt-3 text-xs text-red-600'>  <FaAsterisk /> </span>
                </div>
                <input type="text" id="nombre_pagina"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce el nombre de la página" minLength={5}
                    required
                    onInvalid={e => invalid(e)}
                    onInput={e => e.target.setCustomValidity('')} />
            </div>
            <div className='mt-3 '>
                <div className='flex'>
                    <label htmlFor="message" className="mb-4 font-semibold text-gray-900 dark:text-white">Pequeña descripcion</label>
                    <span className='flex items-center ml-1 -mt-3 text-xs text-red-600'>  <FaAsterisk /> </span>
                </div>
                <textarea id="message" rows="4"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Esta caja es solo para una breve descripción turistica"
                    required
                    onInvalid={e => invalid(e)}
                    onInput={e => e.target.setCustomValidity('')}>
                </textarea>
            </div>

        </div>

    )
}

export default Descripcion