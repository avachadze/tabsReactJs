import React, { useState } from 'react'
import { FaAsterisk } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Descripcion({ buscar, actual, isDark }) {
    const [submited, setSubmited] = useState();
    const checkBoxes = [
        {
            name: "idioma_esp",
            id: "espaniol",
            titulo: "Español",
        },
        {
            name: "idioma_eng",
            id: "ingles",
            titulo: "English",
        },
        {
            name: "idioma_port",
            id: "portugues",
            titulo: "Portuguese",
        }
    ]

    const opciones = [
        {
            idioma: "español",
            titulo_checked: "idioma_esp",
            input_mostrar: "nombre_pagina_esp",
        },
        {
            idioma: "inglés",
            titulo_checked: "idioma_eng",
            input_mostrar: "nombre_pagina_eng"
        },
        {
            idioma: "portugues",
            titulo_checked: "idioma_port",
            input_mostrar: "nombre_pagina_port"
        }
    ]

    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data, obj) => {
        obj.next(obj)
        setSubmited(true)
        console.log(data)

    };

    submited && actualizar()
    function actualizar() {
        //   hacer algo
    }

    const onError = (fieldsErrors) => {
        let error;
        for (const fieldName in fieldsErrors) {
            error = `${fieldsErrors[fieldName].message}`
            toast.error(<div>
                {error}
            </div>);
        }
    };

    return (
        <form onSubmit={handleSubmit(data => onSubmit(data, buscar(actual)), onError)} className='text-start'>
            <div className="absolute"> <ToastContainer draggable theme={isDark ? "dark" : "colored"} /></div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {
                    checkBoxes.map((checkbox) => (
                        <li key={checkbox.id} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className="flex items-center ps-3">
                                <input {...register(checkbox.name)} id={checkbox.id} type="checkbox" value="" className="w-4 h-4 accent-orange-600 dark:accent-cyan-400 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor={checkbox.id} className="w-full py-3  text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">{checkbox.titulo}</label>
                            </div>
                        </li>
                    ))
                }
            </ul>
            {opciones.map((opcion) => (
                <div key={opcion.titulo_checked}>
                    {
                        watch(opcion.titulo_checked) && (
                            <div className='mt-3 '>
                                <div className='flex'>
                                    <label htmlFor={opcion.input_mostrar} className="mb-4 font-semibold text-gray-900 dark:text-white">Nombre del programa en {opcion.idioma} </label>
                                    <span className='flex items-center ml-1 -mt-3 text-xs text-red-600'>  <FaAsterisk /> </span>
                                </div>
                                <input {...register(opcion.input_mostrar, {
                                    required: {
                                        value: true,
                                        message: "Campo nombre es obligatorio"
                                    },
                                    minLength: {
                                        value: 5,
                                        message: "Este campo debería de tener al menos 5 carácteres"
                                    }
                                })}
                                    type="text" id={opcion.input_mostrar}
                                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Introduce el nombre de la página" minLength={5}
                                />
                                {
                                    errors[opcion.input_mostrar] && (
                                        <span className='text-red-500 text-sm'>
                                            {errors[opcion.input_mostrar].message}
                                        </span>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            ))}
            <div className='mt-3 '>
                <div className='flex'>
                    <label htmlFor="message" className="mb-4 font-semibold text-gray-900 dark:text-white">Pequeña descripcion</label>
                    <span className='flex items-center ml-1 -mt-3 text-xs text-red-600'>  <FaAsterisk /> </span>
                </div>
                <textarea {...register("descripcion_pagina", {
                    required: {
                        value: true,
                        message: "Campo descripción es obligatorio"
                    },
                    minLength: {
                        value: 10,
                        message: "Este campo debería de tener al menos 10 carácteres"
                    }
                })}
                    id="message" rows="4"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Esta caja es solo para una breve descripción turistica"
                >
                </textarea>
                {
                    errors.descripcion_pagina &&
                    <span className='text-red-500 text-sm'>
                        {errors.descripcion_pagina.message}
                    </span>
                }
                <div className='flex justify-end w-full gap-3 mt-3'>
                    <button type="submit" className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
                        Siguiente
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Descripcion