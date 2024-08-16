import React, { useEffect, useState } from 'react'
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
function DarkThemeSwitcher() {

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
    return (
        <span onClick={() => darkModeHandler()} className="text-white hover:text-cyan-400 transition cursor-pointer bg-slate-700 p-2 rounded-full float-right text-2xl">
            {isDark ? <FaCloudSun /> : <FaCloudMoon />}
        </span>
    )
}

export default DarkThemeSwitcher