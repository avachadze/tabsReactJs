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
    const [isDark, setDark] = useState() //Variable para mirar en que tema estoy
    const [toggle, setToggle] = useState("TAB_inicio") //Variable para mostrar siguiente componente
    const opciones = [ //todas las opciones de los compoentes
        {
            id: "TAB_inicio",
            texto: "Inicio",
            siguiente: "TAB_prueba",
            descripcionTitulo: "Bienvenido al programa de carga de Viajes",
            descripcion: "Selecciona lo que quieras hacer",
            finished: " ",
            icon: <FaCheckCircle />,
            next: next,
            contenido: <Inicio next={next} />,
            botonSiguiente: "Nuevo Viaje",
        },
        {
            id: "TAB_descripcion",
            texto: "Descripción",
            siguiente: "TAB_incluido",
            descripcionTitulo: "Descripcion",
            descripcion: "detalles importantes",
            icon: <FaBookOpen />,
            next: next,
            contenido: <Descripcion next={next} invalid={invalid} />,
            botonSiguiente: "Siguiente",
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
            botonSiguiente: "Siguiente",
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
            botonSiguiente: "Boton prueba",
        }
    ]
    const [visibles] = useState([opciones[0]]);  //la lista de ASIDE
    function next(ev, actual) {
        ev.preventDefault();
        setToggle(actual.siguiente); //Mostrar siguiente componente 
        opciones.forEach((opcion) => {
            if (opcion.id === actual.siguiente) {
                const exists = visibles.some((visible) => visible.id === opcion.id);
                if (!exists) { //si no existe añadir a la lista para mostrar en el aside.
                    visibles.push(opcion)
                }
            }
        });
    }
    function invalid(e) {//VALIDACION PERSONALIZADA

        var idVal = e.target.id; //ID del input
        let labels = document.getElementsByTagName('label'); //todos los labels00
        let labelText;
        for (var i = 0; i < labels.length; i++) { //buscar el label que corresponde al input que inicia la funcion
            if (labels[i].htmlFor === idVal)
                labelText = labels[i].innerHTML //asignar el texto que esta dentro de label al variable vacio para luego mostrar en el alert.
        }
        //- - - - - -   onInvalid={e => invalid(e)} onInput={e => e.target.setCustomValidity('')}  < - - - - - - Para los campos necesarios 
        if (e.target.validity.valueMissing) { //si tiene de atributo required y esta vacio
            toast.error(<div><span className="font-semibold text-white dark:text-red-400"> Campo: {labelText} </span><br /> Campo obligatorio</div>, {
                position: "top-right",
            });
            e.target.setCustomValidity("Rellena este campo por favor :(")
        } else if (e.target.validity.tooShort) { //si tiene de atributo minLength y no llega a los caracteres minimos
            toast.info(<div><span className="font-semibold text-white dark:text-blue-400"> Campo: {labelText}</span><br /> Demasiado corto</div>, {
                position: "top-right",
            });
        }
    }
    return (
        <div className=" App min-h-[100vh] gap-3 flex flex-col md:grid md:grid-cols-12 p-5 bg-oraneg bg-gray-200 dark:bg-slate-900">
            <div className="absolute"> <ToastContainer draggable theme={isDark ? "dark" : "colored"} /></div>
            <aside className='col-span-12 pb-10 bg-gray-100 border-t-2 border-orange-400 rounded shadow-xl h-fit md:col-span-4 lg:col-span-2 dark:bg-slate-800 text-start dark:border-t-0 dark:border-b-2 md:border-l-2 dark:border-cyan-500'>
                <ul className='grid grid-cols-2 gap-3 p-5 font-semibold text-black dark:text-white md:grid-cols-1 md:space-x-5'>
                    {visibles.map((opcion) => (
                        <li id={opcion.id} key={opcion.id} className="flex flex-row p-3 mt-1 bg-gray-200 rounded cursor-pointer md:bg-gray-100 dark:bg-slate-700 dark:md:bg-slate-800 md:bg-transparent md:p-0" onClick={() => setToggle(opcion.id)}>
                            <span className='mr-2 text-xl text-orange-400 dark:text-white'> {opcion.icon} </span>
                            <span>  {opcion.texto} </span>
                            {toggle === opcion.id && <span className="flex text-[10px] items-center ml-3 animate-ping text-orange-400 dark:text-cyan-400"> <GoDotFill /> </span>}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-3 px-5 font-semibold text-orange-400 dark:text-cyan-300">
                    <FaRegCopyright />
                    2024 Dit Gestion.
                </div>
            </aside>
            <section className='col-span-12 p-5 bg-gray-100 border-b-2 border-orange-400 rounded shadow-xl md:col-span-8 lg:col-span-10 dark:border-0 dark:bg-slate-800'>
                <DarkThemeSwitcher isDark={isDark} setDark={setDark} />
                {opciones.map((opcion) => (
                    <div key={opcion.id} className={toggle === opcion.id ? "show-content" : "hide"}>
                        <div className='w-full pb-5 mb-4 text-left border-b-2 border-orange-400 dark:border-cyan-400'>
                            <h2 className='text-2xl font-semibold text-black dark:text-white'>
                                {opcion.descripcionTitulo}
                            </h2>
                            <span className='text-black dark:text-white'>
                                {opcion.descripcion}
                            </span>
                        </div>
                        <form onSubmit={(ev) => opcion.next(ev, opcion)}>
                            {opcion.contenido}
                            <div className='flex justify-end w-full gap-3 mt-3'>
                                <button type="submit" className='p-4 font-semibold text-white bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
                                    {opcion.botonSiguiente}
                                </button>
                                {visibles.length === opciones.length && <button type="button" className='p-4 font-semibold text-white transition bg-orange-400 rounded hover:bg-orange-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:text-white' >
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
