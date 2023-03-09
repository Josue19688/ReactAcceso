


import React, { useContext, useState } from "react"
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";

function LoginPage() {

    const {login} = useContext(AuthContext);

    const [ form, setForm] = useState({
        email:'',
        password:''
    });

    const onChange = ({target})=>{
        const {name, value} = target; 
        
        setForm({
            ...form,
            [name]:value
        })
    }


    const onSubmit =async (ev)=>{
        ev.preventDefault();
        const {email, password} =  form;
        const ok = await login(email, password);
        if(!ok){
            new Swal('Error','Verifique el usuario o contraseña!','error');
        }
    
    }

    const todoOk = ()=>{
        return (form.email.length>0 && form.password.length>0) ? true :false;
    }


    return (
        
        <div className="flex h-screen  items-center justify-center p-8 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto w-24 h-24" src="https://cc.gob.gt/wp-content/uploads/2019/02/cc_logo.gif" alt="Your Company" />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Iniciar Sesión</h2>
                </div>
                <form className="mt-8 space-y-6"
                    onSubmit={onSubmit}
                >
                    <div className="relative my-6">
                        <input
                            id="correo"
                            type="email"
                            name="email"
                            placeholder="Ingrese su correo"
                            value={form.email}
                            onChange={onChange}
                            className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        />
                        <label
                            htmlFor="correo"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Correo
                        </label>
                    </div><div className="relative my-6">
                        <input
                            id="contrasena"
                            type="password"
                            name="password"
                            placeholder="Ingrese su contrasena"
                            value={form.password}
                            onChange={onChange}
                            className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"

                        />
                        <label
                            htmlFor="contrasena"
                            className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Contraseña
                        </label>
                    </div>

                    <button 
                    type="submit" 
                    disabled={!todoOk()}
                    className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;


