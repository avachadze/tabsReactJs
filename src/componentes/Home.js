import { FaCheckCircle } from "react-icons/fa";
import Inicio from "./secciones/Inicio";
import Incluido from "./secciones/Incluido";
import Descripcion from "./secciones/Descripcion";
import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import Prueba from "./secciones/Prueba";
import { IoIosHappy } from "react-icons/io";

function Home() {
    const [toggle, setToggle] = useState("TAB_inicio")

    const opciones = [{
        id: "TAB_inicio",
        texto: "Inicio",
        visibilidad: "",
        siguiente: "TAB_descripcion",
        descripcionTitulo: "Bienvenido al programa de carga de Viajes",
        descripcion: "Selecciona lo que quieras hacer",
        icon: <FaCheckCircle />,
        next: function next(ev) {
            ev.preventDefault()
            setToggle(this.siguiente)
            let element = document.getElementById(this.siguiente)
            if (element) {
                element.classList.remove("hidden")
            }
            opciones.map((opcion) => (
                opcion.id === this.siguiente && visibles.push(opcion)
            ))
            
        },
        contenido: <Inicio />,
        botonSiguiente: "Nuevo Viaje"
    },
    {
        id: "TAB_descripcion",
        texto: "Descripción",
        visibilidad: "hidden",
        siguiente: "TAB_incluido",
        descripcionTitulo: "Descripcion",
        descripcion: "detalles importantes",
        icon: <FaBookOpen />,
        next: function next(ev) {
            ev.preventDefault()
            setToggle(this.siguiente)
            let element = document.getElementById(this.siguiente)
            if (element) {
                element.classList.remove("hidden")
            }
            opciones.map((opcion) => (
                opcion.id === this.siguiente && visibles.push(opcion)
            ))
            
        },
        contenido: <Descripcion />,
        botonSiguiente: "Siguiente"
    },
    {
        id: "TAB_incluido",
        texto: "Incluido / no",
        visibilidad: "hidden",
        siguiente: "TAB_prueba",
        descripcionTitulo: "Incluido/ No incluido",
        descripcion: "Si el servicio no está seleccionado, el cliente lo verá como no incluido.",
        icon: <FaCheckDouble />,
        next: function next(ev) {
            ev.preventDefault()
            setToggle(this.siguiente)
            let element = document.getElementById(this.siguiente)
            if (element) {
                element.classList.remove("hidden")
            }
            opciones.map((opcion) => (
                opcion.id === this.siguiente && visibles.push(opcion)
            ))
            
        },
        contenido: <Incluido />,
        botonSiguiente: "Siguiente"
    },
    {
        id: "TAB_prueba",
        texto: "Prueba",
        visibilidad: "hidden",
        siguiente: "TAB_descripcion",
        descripcionTitulo: "Prueba",
        descripcion: "Esta es la seccion de prueba",
        icon: <IoIosHappy />,
        next: function next(ev) {
            ev.preventDefault()
            setToggle(this.siguiente)
            let element = document.getElementById(this.siguiente)
            if (element) {
                element.classList.remove("hidden")
            }
            opciones.map((opcion) => (
                opcion.id === this.siguiente && visibles.push(opcion)
            ))
            
        },
        contenido: <Prueba />,
        botonSiguiente: "Nooooooo"
    }
    ]
    const [visibles] = useState([opciones[0]]);


    //console.log(Object.values(opciones).includes("TAB_incluido"))
    /*    function next(ev, next) {
           ev.preventDefault()
           if (opciones[next.id + 1]) {
               setToggle(next.id + 1)
               let element = document.getElementById(next.id + 1)
               element.classList.remove("hidden")
           }
           else {
               alert("Guardando Cambios :D ")
           }
       } */

    return (
        <div className="App min-h-[100vh] grid grid-cols-12 gap-3 flex-row p-5 bg-slate-900">
            <aside className=' hidden md:block md:col-span-4 lg:col-span-2 min-h-[50%] bg-slate-800 text-start border-l-2 border-slate-600'>
                <ul className='p-5 text-white font-semibold flex flex-col md:space-x-5'>
                    {opciones.map((opcion) => (
                        <div id={opcion.id} className={opcion.visibilidad} key={opcion.id}>
                            <li className="flex flex-row cursor-pointer mt-1" onClick={() => setToggle(opcion.id)}>
                                <span className='text-xl mr-2'> {opcion.icon} </span>
                                <span>  {opcion.texto} </span>
                            </li>
                        </div>
                    ))}
                </ul>
            </aside>
            <section className='col-span-12 md:col-span-8 lg:col-span-10 min-h-[50%] bg-slate-800 p-5'>
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
                        <form onSubmit={ev => opcion.next(ev, opcion)}>
                            {opcion.contenido}
                            <div className='mt-3 flex justify-end w-full'>
                                <button id="myAnchor" className='bg-cyan-500 text-white font-semibold p-4 rounded' >
                                    {opcion.botonSiguiente}
                                </button>
                            </div>
                        </form>
                    </div>
                ))}
            </section>
        </div >
    );
}

export default Home;
