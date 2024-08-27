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


function Home() {
    const [isDark, setDark] = useState() //Variable para mirar en que tema estoy
    const [toggle, setToggle] = useState("TAB_prueba") //Variable para mostrar siguiente componente

    const opciones = [
        {
            id: "TAB_inicio",//ID de componente actual
            texto: "Inicio", //texto lista de componente 
            siguiente: "TAB_descripcion", //ID de siguiente componente
            descripcionTitulo: "Bienvenido al programa de carga de Viajes", //titulo dentro de componente
            descripcion: "Selecciona lo que quieras hacer", //descripción de titulo
            icon: <FaCheckCircle />, //icono de la lista
            next: next, //funcioón para basar al siguiente
            contenido: <Inicio buscar={buscar} next={next} actual={"TAB_inicio"} />, //componente a mostrar
        },
        {
            id: "TAB_descripcion",
            texto: "Descripción",
            siguiente: "TAB_incluido",
            descripcionTitulo: "Descripcion",
            descripcion: "detalles importantes",
            icon: <FaBookOpen />,
            next: next,
            contenido: <Descripcion buscar={buscar} next={next} actual={"TAB_descripcion"} isDark={isDark} />,
        },
        {
            id: "TAB_incluido",
            texto: "Incluido / no",
            siguiente: "TAB_prueba",
            descripcionTitulo: "Incluido/ No incluido",
            descripcion: "Si el servicio no está seleccionado, el cliente lo verá como no incluido.",
            icon: <FaCheckDouble />,
            next: next,
            contenido: <Incluido buscar={buscar} next={next} actual={"TAB_incluido"} isDark={isDark} />,
        },
        {
            id: "TAB_prueba",
            texto: "Prueba",
            siguiente: "TAB_incluido",
            descripcionTitulo: "Prueba",
            descripcion: "Esta es la seccion de prueba",
            icon: <IoIosHappy />,
            next: next,
            contenido: <Prueba buscar={buscar} next={next} actual={"TAB_prueba"} isDark={isDark} />,
        },
    ]
    let encontrado;
    function buscar(opcion_actual) { //buscar objeto/componente actual
        opciones.forEach((opcion) => {
            if (opcion.id === opcion_actual) {
                encontrado = opcion;
            }
        });
        return encontrado; //retornar objeto actual ej:[opcion0] para que el componente tenga acceso a los datos del mismo.
    }

    const [visibles] = useState([opciones[0]]);  //la lista de los titulos que podemos mostrar en el aside, empieza por la primera en lista (0)
    function next(actual) {
        setToggle(actual.siguiente); //Mostrar siguiente componente añadiendo
        opciones.forEach((opcion) => {
            if (opcion.id === actual.siguiente) { //buscar en la lista de opciones el ID del siguiente componente
                const exists = visibles.some((visible) => visible.id === opcion.id); //mirar si ya esta añdido a la lista de visibles
                if (!exists) { //si no existe en la lista(visibles), añadir a la lista (visibles) para mostrar en el aside.
                    visibles.push(opcion)
                }
            }
        });
    }
    return (
        <div className=" App min-h-[100vh] gap-3 flex flex-col md:grid md:grid-cols-12 p-5 bg-oraneg bg-gray-200 dark:bg-slate-900">
            <aside className='sticky top-4 col-span-12 pb-10 bg-gray-100 border-t-2 border-orange-400 rounded shadow-xl h-fit md:col-span-4 lg:col-span-2 dark:bg-slate-800 text-start dark:border-t-0 dark:border-b-2 md:border-l-2 dark:border-cyan-500'>
                <ul className='grid grid-cols-2 gap-3 p-5 font-semibold text-black dark:text-white md:grid-cols-1 md:space-x-5'>
                    {visibles.map((opcion) => (
                        <li id={opcion.id} key={opcion.id} className="flex flex-row p-3 mt-1 bg-gray-200 rounded cursor-pointer md:bg-gray-100 dark:bg-slate-700 dark:md:bg-slate-800 md:bg-transparent md:p-0" onClick={() => setToggle(opcion.id)}>
                            <span className='mr-2 text-xl text-orange-400 dark:text-white'> {opcion.icon} </span>
                            <span>  {opcion.texto} </span>
                            {toggle === opcion.id && <span className="flex text-[10px] items-center ml-3 animate-ping text-orange-400 dark:text-cyan-400"> <GoDotFill /> </span>}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2 px-5 font-semibold text-orange-400 dark:text-cyan-300">
                    <FaRegCopyright />
                    2024 Dit Gestion
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
                        <div>

                            {opcion.contenido}
                        </div>
                    </div>
                ))}
            </section>
        </div >
    );
}
export default Home;
