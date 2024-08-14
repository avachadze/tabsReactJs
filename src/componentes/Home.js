import { FaCheckCircle } from "react-icons/fa";
import Inicio from "./Inicio";
import Incluido from "./Incluido";
import Descripcion from "./Descripcion";
import React, { useState, useRef } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
function Home() {
    const [toggle, setToggle] = useState(0)
    const valueRef = useRef(0);

    const [opciones, setOpciones] = useState([{
        id: 0,
        texto: "Inicio",
        visibilidad: "",
        descripcionTitulo: "Bienvenido al programa de carga de Viajes",
        descripcion: "Selecciona lo que quieras hacer",
        icon: <FaCheckCircle />,
        next: next,
        contenido: <Inicio />,
        botonSiguiente: "Nuevo Viaje"
    },
    {
        id: 1,
        texto: "Descripción",
        visibilidad: "hidden",
        descripcionTitulo: "Descripcion",
        descripcion: "detalles importantes",
        icon: <FaBookOpen />,
        next: next,
        contenido: <Descripcion />,
        botonSiguiente: "Siguiente"
    },
    {
        id: 2,
        texto: "Incluido / no",
        visibilidad: "hidden",
        descripcionTitulo: "Incluido/ No incluido",
        descripcion: "Si el servicio no está seleccionado, el cliente lo verá como no incluido.",
        icon: <FaCheckDouble />,
        next: next,
        contenido: <Incluido />,
        botonSiguiente: "Siguiente"

    }
    ])

    function next(ev, next) {
        console.log(toggle)
        valueRef.current =  valueRef.current+1 
        console.log(valueRef.current)
        
        ev.preventDefault()
        if (opciones[next.id + 1]) {
            setToggle(next.id + 1)
            setOpciones(opciones.map(e => (e.id === next.id + 1 ? { ...e, visibilidad: "descripcion 1" } : e)))
        }

    }

    return (
        <div className="App min-h-[100vh] grid grid-cols-12 gap-3 flex-row p-5 bg-slate-900">
            <aside className='col-span-4 md:col-span-4 lg:col-span-2 min-h-[50%] bg-slate-800 text-start border-l-2 border-slate-600'>
                <ul className='p-5 text-white font-semibold flex flex-col space-x-5'>
                    {opciones.map((opcion) => (
                        <div className={opcion.visibilidad} key={opcion.id}>
                            <li className="flex flex-row cursor-pointer mt-1" onClick={() => valueRef(opcion.id)}>
                                <span className='text-xl mr-2'> {opcion.icon} </span>
                                <span>  {opcion.texto} </span>
                            </li>
                        </div>
                    ))}
                </ul>
            </aside>
            <section className='col-span-8 md:col-span-8 lg:col-span-10 min-h-[50%] bg-slate-800 p-5'>
                {opciones.map((opcion) => (
                    <div key={opcion.id} className={toggle === opcion.id ? "show-content" : "content"}>
                        <div className='border-b text-left border-cyan-400 w-full pb-5'>
                            <h2 className='text-2xl font-semibold text-white'>
                                {opcion.descripcionTitulo}
                            </h2>
                            <span className='text-white'>
                                {opcion.descripcion}
                            </span>
                        </div>
                        {opcion.contenido}
                        <div className='mt-3 flex justify-end w-full'>
                            <form onSubmit={ev => opcion.next(ev, opcion)}>
                                <button id="myAnchor" className='bg-cyan-500 text-white font-semibold p-4 rounded' >
                                    {opcion.botonSiguiente}
                                </button>
                            </form>
                        </div>
                    </div>
                ))}
            </section>
        </div >
    );
}

export default Home;
