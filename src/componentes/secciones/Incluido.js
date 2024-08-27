import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';



function Incluido({ buscar, actual, isDark }) {
    const { register, handleSubmit } = useForm()
    const incluidos = [{
        id: "crucero",
        opcion: "Crucero"
    },
    {
        id: "caballo",
        opcion: "Montar en un caballo"
    },
    {
        id: "escape_room",
        opcion: "Escape room"
    },
    {
        id: "tour",
        opcion: "Tour por la costa"
    },
    {
        id: "translado",
        opcion: "Translato al hotel"
    },
    {
        id: "desayuno",
        opcion: "Desayuno"
    },
    {
        id: "comida",
        opcion: "Comida"
    },
    {
        id: "cena",
        opcion: "Cena"
    },
    ]

    const onSubmit = (data, obj) => {
        obj.next(obj) //muestra siguiente componente
    };

    return (
        <div className='text-start'>
            <form onSubmit={handleSubmit(data => onSubmit(data, buscar(actual)))} className='text-start'>
                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Incluidos:</h3>
                <ul className="items-center grid grid-cols-2 md:grid-cols-4 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {incluidos.map((actividad) => (
                        <li key={actividad.id} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input {...register(actividad.id)} id={actividad.id} type="checkbox" value="" className="accent-orange-600 dark:accent-cyan-400 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor={actividad.id} className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{actividad.opcion}</label>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className='flex justify-end w-full gap-3 mt-3'>
                    <button type="submit" className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:text-white' >
                        Siguiente
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Incluido