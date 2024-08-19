import React, { useEffect } from 'react'
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
function DarkThemeSwitcher({ isDark, setDark }) {

    let color = localStorage.getItem("theme");

    useEffect(() => {
        if (color === "dark") {
            setDark(true)
        } else {
            setDark(false)
        }
        document.body.classList.add(color);

    }, [color, setDark]);
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
    return (
        <span onClick={() => darkModeHandler()} className="text-white dark:hover:text-cyan-400 transition cursor-pointer dark:bg-slate-700 bg-orange-400 hover:bg-orange-500 p-2 rounded-full float-right text-2xl">
            {isDark ? <FaCloudSun /> : <FaCloudMoon />}
        </span>
    )
}

export default DarkThemeSwitcher