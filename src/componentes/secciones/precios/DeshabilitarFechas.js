import React from 'react'
function DeshabilitarFechas({ handleSubmit, onEdit, register }) {
    return (
        <form key={2} className='mt-5 ' onSubmit={handleSubmit(data => onEdit(data))}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 flex-row items-center ">
                <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input {...register("fecha_inicio_deshabilitar")} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                </div>
                <span className="mx-4 text-gray-500 flex justify-center">a</span>
                <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input {...register("fecha_fin_deshabilitar")} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                </div>
            </div>
            <div className=' mt-5 grid md:cols-1 lg:grid-cols-3 gap-4'>
                <div className='flex flex-col '>
                    <h3 className='text-start font-semibold '>Habitacion individual</h3>
                    <button type='submit' className='bg-red-600  w-full lg:w-[250px] hover:bg-red-700 font-semibold p-2 rounded' name='individual_deshabilitar' >Individual</button>
                    <button type='submit' className='bg-green-600 mt-3  w-full lg:w-[250px] hover:bg-green-700 font-semibold p-2 rounded' name='individual_habilitar' >Individual</button>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-start font-semibold '>Habitacion individual</h3>
                    <button type='submit' className='bg-red-600 w-full lg:w-[250px]  hover:bg-red-700 font-semibold p-2 rounded' name='doble_deshabilitar'>Doble</button>
                    <button type='submit' className='bg-green-600 mt-3 w-full lg:w-[250px] hover:bg-green-700 font-semibold p-2 rounded' name='doble_habilitar'>Doble</button>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-start font-semibold '>Habitacion individual</h3>
                    <button type='submit' className='bg-red-600 w-full lg:w-[250px] hover:bg-red-700 font-semibold p-2 rounded' name='triple_deshabilitar'>Triple</button>
                    <button type='submit' className='bg-green-600 mt-3 w-full lg:w-[250px] hover:bg-green-700 font-semibold p-2 rounded' name='triple_habilitar'>Triple</button>
                </div>
            </div>
        </form>
    )
}

export default DeshabilitarFechas