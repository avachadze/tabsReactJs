import { FaCheckCircle } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import Inicio from "./Inicio";
import Incluido from "./Incluido";
import Descripcion from "./Descripcion";
import React, { useState, useEffect } from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

function Home() {
    const [descripcion, setDescripcion] = useState("")
    const opciones = [{
        id: 0,
        texto: "Inicio",
        icon: <FaCheckCircle />,
        next: function next() {

        },


    },
    {
        id: 1,
        texto: "Descripción",
        icon: <FaBookOpen />,
        next: function next() {

        },

    },
    {
        id: 2,
        texto: "Incluido / no",
        icon: <FaCheckDouble />,
        next: function next() {

        },

    }
    ]
    useEffect(() => {
        document.getElementById(0).classList.remove("content")
        document.getElementById(0).classList.add("prueba")
    });
    const [toggle, setToggle] = useState(0)
    function addClass(id) {
        let element = document.getElementById(id)
        console.log(element)
        if (element) {
            element.classList.remove("content")
            element.classList.add("prueba")
        }
    }

    return (
        <div className="App min-h-[100vh] grid grid-cols-12 gap-3 flex-row p-5 bg-slate-900">
            <aside className='col-span-4 md:col-span-3 lg:col-span-2 min-h-[50%] bg-slate-800 text-start border-l-2 border-slate-600'>
                <ul className='p-5 text-white font-semibold flex flex-col space-x-5'>
                    {opciones.map((opcion) => (
                        <li id={opcion.id} className="content" onClick={() => setToggle(opcion.id)}>
                            <span className='text-xl mr-2'> {opcion.icon} </span>
                            <span>  {opcion.texto} </span>
                        </li>
                    ))}
                </ul>
            </aside>
            <section className='col-span-8 md:col-span-9 lg:col-span-10 min-h-[50%] bg-slate-800 p-5'>
                <div className={toggle === 0 ? "show-content" : "content"}>
                    <Inicio addClass={addClass} setToggle={setToggle} />
                </div>
                <div className={toggle === 1 ? "show-content" : "content"}>
                    <Descripcion addClass={addClass} setToggle={setToggle} />
                </div>
                <div className={toggle === 2 ? "show-content" : "content"}>
                    <Incluido setToggle={setToggle} />
                </div>
            </section>
        </div >
    );
}

export default Home;
