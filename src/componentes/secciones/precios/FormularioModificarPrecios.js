import React from 'react'

function FormularioModificarPrecios({ handleSubmit, onEdit, buscar, actual, register, watch }) {
    const tipoCambio = watch("tipoCambio");
    return (
        <div>

            <form key={2} className='mt-4' onSubmit={handleSubmit(data => onEdit(data))}>
                <div className='lg:grid grid-cols-2 w-full justify-between'>
                    <div className="md:grid grid-cols-3 flex-row items-center ">
                        <div className="relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input {...register("fecha_inicio_edit")} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                        </div>
                        <span className="mx-4 text-gray-500 text-center">a</span>
                        <div className="relative ">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input {...register("fecha_fin_edit")} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                        </div>
                    </div>
                    <div className='md:flex mt-5 lg:mt-0 justify-end'>
                        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-5">
                            <input {...register("tipoCambio")} checked="checked" value={"porcentaje"} id="bordered-radio-2" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="bordered-radio-2" class=" py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Porcentaje</label>
                        </div>
                        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-5">
                            <input {...register("tipoCambio")} value={"cantidad"} id="bordered-radio-1" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="bordered-radio-1" class=" py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cantidad a incrementar</label>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3'>
                    <div>
                        <label htmlFor="precio_doble" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio individual</label>
                        <input {...register("precio_individual_incr")} type="number" id="precio_individual_incr" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={tipoCambio === "porcentaje" ? (
                                "Porcentaje %"
                            ) :
                                "Cantidad"
                            }
                        />
                    </div>

                    <div>
                        <label htmlFor="precio_doble" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio habitacion doble</label>
                        <input {...register("precio_doble_incr")} type="number" id="precio_doble_incr" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={tipoCambio === "porcentaje" ? (
                                "Porcentaje %"
                            ) :
                                "Cantidad"
                            } />
                    </div>
                    <div>
                        <label htmlFor="precio_doble" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio habitacion triple</label>
                        <input {...register("precio_triple_incr")} type="number" id="precio_triple_incr" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={tipoCambio === "porcentaje" ? (
                                "Porcentaje %"
                            ) :
                                "Cantidad"
                            } />
                    </div>
                </div>
                <div className='flex justify-start w-full gap-3 mt-3'>
                    <button type="submit" className='p-4 font-semibold text-white bg-black my-3 rounded  dark:bg-pink-600 dark:hover:bg-pink-700 dark:text-white' >
                        Actualizar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormularioModificarPrecios