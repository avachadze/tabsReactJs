import React, { useState } from "react";
import { useForm } from "react-hook-form"

export default function Prueba() {
    const { register, handleSubmit, formState: {errors} } = useForm()

console.log(errors)
const onSubmit = handleSubmit((data)=>{
    console.log(data)
})
 

    return (
        <div className="App text-white flex">
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text"  {...register("nombre",{
                        required:true
                    })} />
                  {errors.nombre && <span>Nombre requerido </span>}
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" {...register("email")} />
                </div>
                <div className="form-control">
                    <label></label>
                    <button className="bg-cyan-400 p-3" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}