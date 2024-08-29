import React from 'react'
import { FaAsterisk } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
function Descripcion({ buscar, actual, isDark }) {
    let error;
    let type;
    const { register, watch, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data, obj) => {
        toast.dismiss() //si hay algun toast container oculta todos
        obj.next(obj) //muestra siguiente componente
    };
    const onError = (fieldsErrors) => {
        for (const fieldName in fieldsErrors) {
            type = fieldsErrors[fieldName].type;
            error = fieldsErrors[fieldName].message
            type === "required" ? toast.error(<div>
                {error}
            </div>)
                : toast.info(
                    <div>
                        {error}
                    </div>)
        }
    };

    const checkBoxes = [ //checkboxes de idioma 
        {
            name: "idioma_esp", //name en checkbox
            id: "espaniol", //ID de checkbox
            titulo: "Español", //Texto que mostrar
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

    const opciones = [ //inputs que deberian de aparecer depende del idioma seleccionado
        {
            idioma: "español", //idioma seleccionado
            titulo_checked: "idioma_esp", //name del checkbox padre 
            name: "nombre_pagina_esp", //equivalente a na
        },
        {
            idioma: "inglés",
            titulo_checked: "idioma_eng",
            name: "nombre_pagina_eng"
        },
        {
            idioma: "portugues",
            titulo_checked: "idioma_port",
            name: "nombre_pagina_port"
        }
    ]



    return (
        <form onSubmit={handleSubmit(data => onSubmit(data, buscar(actual)), onError)} className='text-start'>
            <div className="absolute"> <ToastContainer draggable theme={isDark ? "dark" : "colored"} /></div>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Idiomas</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {checkBoxes.map((checkbox) => (
                    <li key={checkbox.id} className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div className="flex items-center ps-3">
                            <input {...register(checkbox.name)} id={checkbox.id} type="checkbox" value="" className="w-4 h-4 accent-orange-600 dark:accent-cyan-400 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor={checkbox.id} className="w-full py-3  text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">{checkbox.titulo}</label>
                        </div>
                    </li>
                ))}
            </ul>
            {opciones.map((opcion) => (
                <div key={opcion.titulo_checked}>
                    {watch(opcion.titulo_checked) && (
                        <div class="relative mt-3">
                            <input {...register(opcion.name, {
                                required: {
                                    value: true,
                                    message: "Campo nombre es obligatorio"
                                },
                                minLength: {
                                    value: 5,
                                    message: "Este campo debería de tener al menos 5 carácteres"
                                }
                            })} type="text" id={opcion.name} aria-describedby="filled_success_help" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-orange-200 dark:border-cyan-600 appearance-none dark:text-white dark:focus:border-cyan-400 focus:outline-none focus:ring-0 focus:border-orange-200 peer" placeholder=" " />
                            <label for="filled_success" class="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                {errors[opcion.name] && (
                                    <span className='text-red-500'>
                                        {errors[opcion.name].message}
                                    </span>
                                )}
                            </label>
                        </div>
                    )}
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
                {errors.descripcion_pagina &&
                    <span className='text-red-500 text-sm'>
                        {errors.descripcion_pagina.message}
                    </span>
                }
                <div className='flex justify-end w-full gap-3 mt-3'>
                    <button type="submit" className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-600 dark:hover:bg-cyan-600 dark:text-white' >
                        Siguiente
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Descripcion