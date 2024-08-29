import React from 'react'
function DeshabilitarFechas({ handleSubmit, onEdit, register }) {
    return (
        <form key={2} className='mt-5' onSubmit={handleSubmit(data => onEdit(data))}>
            <div className="grid flex-row items-center grid-cols-1 md:grid-cols-1 lg:grid-cols-6 ">
                <div className="relative ">
                    <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input {...register("fecha_inicio_deshabilitar")} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                </div>
                <span className="flex justify-center mx-4 text-gray-500">a</span>
                <div className="relative ">
                    <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input {...register("fecha_fin_deshabilitar")} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                </div>
            </div>
            <div className='grid gap-4 mt-5 md:cols-1 lg:grid-cols-3'>
                <div className='flex flex-col '>
                    <h3 className='font-semibold text-start '>Habitacion individual</h3>
                    <button type='submit' className='bg-purple-500 dark:bg-purple-600 hover:bg-purple-600 text-white   w-full lg:w-[250px] dark:hover:bg-purple-700 font-semibold p-2 rounded' name='individual_deshabilitar' >NO Disponible</button>
                    <button type='submit' className='bg-purple-700 text-white hover:bg-purple-800 dark:bg-purple-800 mt-3  w-full lg:w-[250px] dark:hover:bg-purple-900 font-semibold p-2 rounded' name='individual_habilitar' >Disponible</button>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-start '>Habitacion doble</h3>
                    <button type='submit' className='bg-pink-400 dark:bg-pink-500 hover:bg-pink-500 text-white  w-full lg:w-[250px]  dark:hover:bg-pink-600 font-semibold p-2 rounded' name='doble_deshabilitar'>NO Disponible</button>
                    <button type='submit' className='bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-700 mt-3 w-full lg:w-[250px] dark:hover:bg-pink-800 font-semibold p-2 rounded' name='doble_habilitar'>Disponible</button>
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-start '>Habitacion triple</h3>
                    <button type='submit' className='bg-cyan-400 dark:bg-cyan-500 hover:bg-cyan-500 text-white  w-full lg:w-[250px] dark:hover:bg-cyan-600 font-semibold p-2 rounded' name='triple_deshabilitar'>NO Disponible</button>
                    <button type='submit' className='bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-600 mt-3 w-full lg:w-[250px] dark:hover:bg-cyan-700 font-semibold p-2 rounded' name='triple_habilitar'>Disponible</button>
                </div>
            </div>
        </form>
    )
}

export default DeshabilitarFechas