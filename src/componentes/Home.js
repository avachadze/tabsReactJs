import { FaCheckCircle } from "react-icons/fa";
import Inicio from "./secciones/Inicio";
import Incluido from "./secciones/Incluido";
import Descripcion from "./secciones/Descripcion";
import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import Prueba from "./secciones/Prueba";
import { IoIosHappy } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import DarkThemeSwitcher from "./DarkThemeSwitcher";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
    const [isDark, setDark] = useState();

    const [toggle, setToggle] = useState("TAB_inicio")
    const opciones = [{
        id: "TAB_inicio",
        texto: "Inicio",
        siguiente: "TAB_prueba",
        descripcionTitulo: "Bienvenido al programa de carga de Viajes",
        descripcion: "Selecciona lo que quieras hacer",
        finished: " ",
        icon: <FaCheckCircle />,
        next: next,
        contenido: <Inicio />,
        botonSiguiente: "Nuevo Viaje"
    },
    {
        id: "TAB_descripcion",
        texto: "Descripción",
        siguiente: "TAB_incluido",
        descripcionTitulo: "Descripcion",
        descripcion: "detalles importantes",
        icon: <FaBookOpen />,
        next: next,
        contenido: <Descripcion invalid={invalidRequired} />,
        botonSiguiente: "Siguiente"
    },
    {
        id: "TAB_incluido",
        texto: "Incluido / no",
        siguiente: "TAB_prueba",
        descripcionTitulo: "Incluido/ No incluido",
        descripcion: "Si el servicio no está seleccionado, el cliente lo verá como no incluido.",
        icon: <FaCheckDouble />,
        next: next,
        contenido: <Incluido />,
        botonSiguiente: "Siguiente"
    },
    {
        id: "TAB_prueba",
        texto: "Prueba",
        siguiente: "TAB_descripcion",
        descripcionTitulo: "Prueba",
        descripcion: "Esta es la seccion de prueba",
        icon: <IoIosHappy />,
        next: next,
        contenido: <Prueba />,
        botonSiguiente: "Boton prueba"
    }
    ]

    const [visibles] = useState([opciones[0]]);
    function next(ev, actual) {



        ev.preventDefault();
        setToggle(actual.siguiente);
        opciones.forEach((opcion) => {
            if (opcion.id === actual.siguiente) {
                const exists = visibles.some((visible) => visible.id === opcion.id);
                if (!exists) {
                    visibles.push(opcion)
                }
            }
        });
    }
    function invalidRequired(e) {

        //onInvalid={e => invalid(e)} onInput={e => e.target.setCustomValidity('')} <---- Para los campos necesarios 

        console.log(e.target.validity)
        if (e.target.validity.valueMissing) {
            toast.error("Algunos campos son obligatorios!", {
                position: "top-right",

            });
            e.target.setCustomValidity("Rellena este campo por favor :(")
        } else if (e.target.validity.tooShort) {
            toast.info("Demasiado corto!", {
                position: "top-right",

            });
            e.target.setCustomValidity("Este campo deberia de tener como minimo " + e.target.minLength + " carácteres :D Quedan: " + (e.target.minLength - e.target.value.length))
        }

    }
    return (
        <div className=" App min-h-[100vh] gap-3 flex flex-col md:grid md:grid-cols-12 p-5 bg-oraneg bg-gray-200 dark:bg-slate-900">
            <div className="absolute"> <ToastContainer draggable theme={isDark ? "dark" : "colored"} /></div>
            <aside className='h-fit  col-span-12 pb-10  md:col-span-4 lg:col-span-2  shadow-xl bg-gray-100 rounded dark:bg-slate-800 text-start border-t-2 dark:border-t-0 dark:border-b-2 md:border-l-2 border-orange-400 dark:border-cyan-500'>
                <ul className='p-5 text-black dark:text-white font-semibold grid grid-cols-2 md:grid-cols-1 gap-3 md:space-x-5'>
                    {visibles.map((opcion) => (
                        <li id={opcion.id} key={opcion.id} className="flex flex-row bg-gray-200  md:bg-gray-100 dark:bg-slate-700 dark:md:bg-slate-800 rounded  md:bg-transparent  md:p-0 p-3 cursor-pointer mt-1" onClick={() => setToggle(opcion.id)}>
                            <span className='text-xl mr-2 dark:text-white text-orange-400'> {opcion.icon} </span>
                            <span>  {opcion.texto} </span>
                            {toggle === opcion.id && <span className="flex text-[10px] items-center ml-3 animate-ping text-orange-400 dark:text-cyan-400"> <GoDotFill /> </span>}
                        </li>
                    ))}
                </ul>
                <div className="text-orange-400 font-semibold dark:text-cyan-300 px-5 flex items-center gap-3">
                    <FaRegCopyright />
                    2017 Dit Gestion.
                </div>
            </aside>
            <section className=' col-span-12 md:col-span-8 lg:col-span-10 border-b-2 border-orange-400 dark:border-0  shadow-xl bg-gray-100 rounded dark:bg-slate-800 p-5'>
                <DarkThemeSwitcher isDark={isDark} setDark={setDark} />

                {opciones.map((opcion) => (
                    <div key={opcion.id} className={toggle === opcion.id ? "show-content" : "hide"}>
                        <div className='border-b-2  text-left  border-orange-400 dark:border-cyan-400 w-full pb-5 mb-4'>
                            <h2 className='text-2xl font-semibold text-black dark:text-white'>
                                {opcion.descripcionTitulo}
                            </h2>
                            <span className='text-black dark:text-white'>
                                {opcion.descripcion}
                            </span>
                        </div>
                        <form onSubmit={(ev) => opcion.next(ev, opcion)}>
                            {opcion.contenido}
                            <div className='mt-3 flex justify-end w-full gap-3'>
                                <button type="submit" className='bg-orange-400 hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white dark:text-white font-semibold p-4 rounded' >
                                    {opcion.botonSiguiente}
                                </button>
                                {visibles.length === opciones.length && <button type="button" className='bg-orange-400 transition hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white dark:text-white font-semibold p-4 rounded' >
                                    Cerrar
                                </button>}
                            </div>
                        </form>
                    </div>
                ))}
            </section>
        </div >
    );
}

export default Home;
