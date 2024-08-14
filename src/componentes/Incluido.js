import React from 'react'

function Incluido() {
    return (
        <div className='text-start'>
            <div className='border-b border-cyan-400 w-full pb-5'>
                <h2 className='text-2xl font-semibold text-white'>
                    Incluido/ No incluido
                </h2>
                <span className='text-white'>
                    Si el servicio no está seleccionado, el cliente lo verá como no incluido.
                </span>
            </div>

            <div>
                <span className='text-white font-semibold'>
                    Programa: tituloProyecto =D (Categoria Principal)
                </span>
                <div>
                    <div className='grid gap-2 pt-3'>
                        <span class=" font-semibold  text-white">Identification</span>
                        <ul class="items-center w-full text-sm font-medium border  rounded-lg sm:flex bg-gray-700 border-gray-600 text-white">
                            <li class="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
                                <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4   ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />
                                    <label for="horizontal-list-radio-license" class="w-full py-3 ms-2 text-sm font-medium  text-gray-300">Grupo </label>
                                </div>
                            </li>
                            <li class="w-full border-b  sm:border-b-0 sm:border-r border-gray-600">
                                <div class="flex items-center ps-3">
                                    <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4   ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500" />
                                    <label for="horizontal-list-radio-id" class="w-full py-3 ms-2 text-sm font-medium  text-gray-300">Privado</label>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className='pt-3 mt-4'>
                        <span class="text-lg font-semibold  text-white">Vuelos (Gestionados por la Agencia)
                        </span>
                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                            <label for="default-checkbox" class="ms-2 text-sm font-medium  text-gray-300">Vuelos Internacionales llegada/salida</label>
                        </div>

                    </div>
                    <div className='bg-gray-700 p-3 '>
                        <h3 className='text-xl text-white font-semibold my-3 border-b-2 w-fit'>
                            Haga clic solo si el servicio está incluido
                        </h3>
                        <div>
                            <span class="text-lg font-semibold  text-white">Llegada
                            </span>

                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium  text-gray-300">Traslado de llegada desde el aeropuerto</label>
                            </div>

                        </div>
                        <div>
                            <span class="text-lg font-semibold  text-white">Salida
                            </span>

                            <div class="flex items-center mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" />
                                <label for="default-checkbox" class="ms-2 text-sm font-medium  text-gray-300">Traslado de salida desde el aeropuerto</label>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 flex justify-end w-full'>
                <button className='bg-cyan-500 text-white font-semibold p-4 rounded' >
                    Continuar
                </button>
            </div>
        </div>
    )
}

export default Incluido