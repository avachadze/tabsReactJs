import { FaCheckCircle } from "react-icons/fa";
import Inicio from "./secciones/Inicio";
import Incluido from "./secciones/Incluido";
import Descripcion from "./secciones/Descripcion";
import React, { useState, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import Prueba from "./secciones/Prueba";
import { IoIosHappy } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

function Home() {
    const [toggle, setToggle] = useState("TAB_inicio")
    const opciones = [{
        id: "TAB_inicio",
        texto: "Inicio",
        siguiente: "TAB_prueba",
        descripcionTitulo: "Bienvenido al programa de carga de Viajes",
        descripcion: "Selecciona lo que quieras hacer",
        finished: " ",
        icon: <FaCheckCircle/>,
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
        icon: <FaBookOpen  />,
        next: next,
        contenido: <Descripcion />,
        botonSiguiente: "Siguiente"
    },
    {
        id: "TAB_incluido",
        texto: "Incluido / no",
        siguiente: "TAB_prueba",
        descripcionTitulo: "Incluido/ No incluido",
        descripcion: "Si el servicio no está seleccionado, el cliente lo verá como no incluido.",
        icon: <FaCheckDouble/>,
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
        icon: <IoIosHappy/>,
        next: next,
        contenido: <Prueba />,
        botonSiguiente: "Boton prueba"
    }
    ]
    //Array de la lista visible.
    const [visibles] = useState([opciones[0]]);
    //Funcion para determinar que página tiene que aparecer despues de dar al boton siguiente.
    function next(actual) {
        setToggle(actual.siguiente);
        //Añadir objeto a la lista visible evitando si esta duplicado.
        opciones.forEach((opcion) => {
            if (opcion.id === actual.siguiente) {
                const exists = visibles.some((visible) => visible.id === opcion.id);
                if (!exists) {
                    visibles.push(opcion)
                }
            }
        });
    }
    //Boton guardar y salir
    function handleSubmit(ev) {
        ev.preventDefault();
        alert("guardado")
    }
    //DARK MODE
    const [isDark, setDark] = useState();
    let color = localStorage.getItem("theme");
    useEffect(() => {
        if (color === "dark") {
            setDark(true)
        } else {
            setDark(false)
        }
        document.body.classList.add(color);
    }, [color]);
    const darkModeHandler = () => {
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
            setDark(false);
        } else {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
            setDark(true);
        }
    }
    //DARK MODE

    return (
        <div className="App min-h-[100vh] gap-3 grid grid-cols-12 p-5  dark:bg-slate-900">
            <aside className='h-fit col-span-12 pb-10  md:col-span-4 lg:col-span-2  bg-slate-800 text-start border-b-2 md:border-l-2 border-cyan-500'>
                <ul className='p-5 text-white font-semibold grid grid-cols-2 md:grid-cols-1 gap-3 md:space-x-5'>
                    {visibles.map((opcion) => (
                        <li id={opcion.id} key={opcion.id} className="flex flex-row bg-slate-700 rounded  md:bg-transparent  md:p-0 p-3 cursor-pointer mt-1" onClick={() => setToggle(opcion.id)}>
                            <span className='text-xl mr-2'> {opcion.icon} </span>
                            <span>  {opcion.texto} </span>
                            {toggle === opcion.id && <span className="flex text-[10px] items-center ml-3 animate-ping text-cyan-400"> <GoDotFill /> </span>}
                        </li>
                    ))}
                </ul>
                <div className="text-cyan-300 px-5 flex items-center gap-3">
                    <FaRegCopyright />
                      2017 Dit Gestion.
                </div>
            </aside>
            <section className='h-full  col-span-12 md:col-span-8 lg:col-span-10  bg-slate-800 p-5'>
                <span onClick={() => darkModeHandler()} className="text-white hover:text-cyan-400 transition cursor-pointer bg-slate-700 p-2 rounded-full float-right text-2xl">

                    {isDark ? <FaCloudSun /> : <FaCloudMoon />}
                </span>
                {opciones.map((opcion) => (
                    <div key={opcion.id} className={toggle === opcion.id ? "show-content" : "content"}>
                        <div className='border-b text-left border-cyan-400 w-full pb-5 mb-4'>
                            <h2 className='text-2xl font-semibold text-white'>
                                {opcion.descripcionTitulo}
                            </h2>
                            <span className='text-white'>
                                {opcion.descripcion}
                            </span>
                        </div>
                        <form onSubmit={ev => handleSubmit(ev)}>
                            {opcion.contenido}
                            <div className='mt-3 flex justify-end w-full gap-3'>
                                <button onClick={() => opcion.next(opcion)} type="button" className='bg-cyan-500 hover:bg-cyan-600 text-white font-semibold p-4 rounded' >
                                    {opcion.botonSiguiente}
                                </button>
                                {opciones.length === visibles.length && <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 text-white font-semibold p-4 rounded' >
                                    Guardar y salir
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
