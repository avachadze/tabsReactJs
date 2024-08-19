import React from 'react'
function Descripcion({ invalid }) {

    return (
        <div className='text-start'>

            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Español</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">English</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center ps-3">
                        <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Portugués</label>
                    </div>
                </li>
            </ul>
            <div className=' mt-3'>
                <label htmlFor="nombre_pagina" className="mb-4 font-semibold text-gray-900 dark:text-white">Nombre del programa (*) </label>
                <input type="text" id="nombre_pagina" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce el nombre de la página" minLength={5} required onInvalid={e => invalid(e)} onInput={e => e.target.setCustomValidity('')} />
            </div>
            <div className=' mt-3'>
                <label htmlFor="message" className="mb-4 font-semibold text-gray-900 dark:text-white">Pequeña descripcion (*)</label>
                <textarea id="message" rows="4" className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Esta caja es solo para una breve descripción turistica"   required onInvalid={e => invalid(e)} onInput={e => e.target.setCustomValidity('')}></textarea>
            </div>

        </div>

    )
}

export default Descripcion