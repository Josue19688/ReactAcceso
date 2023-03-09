import React, { createContext, useCallback, useState } from "react";
import fetchToken from "../helpers/fetchToken";

import fetchSinToke from '../helpers/fetch';

export const AuthContext =  createContext();


const initialState ={
    uid:null,
    logged:false,
    nombre:null,
    email:null
};

export const AuthProvider =({children})=>{

    const [auth, setAuth] = useState(initialState);

    const login  = async(email,password)=>{
        const resp =  await fetchSinToke('login',{email, password},'POST');
      
        if(resp.ok){
            localStorage.setItem('token',resp.token);

            setAuth({
                uid:resp.usuario.uid,
                logged:true,
                nombre:resp.usuario.nombre,
                email:resp.usuario.email
            })
        }

        return resp.ok;
    }

    const verificaToken = useCallback(async()=>{
        const token = localStorage.getItem('token');
        
        if(!token){
            setAuth({
                uid:null,
                logged:false,
                nombre:null,
                email:null
            })
            return false;
        }

        const resp = await fetchToken('login/renew');
        if(resp.ok){
            localStorage.setItem('token',resp.token);

            setAuth({
                uid:resp.usuario.uid,
                logged:true,
                nombre:resp.usuario.nombre,
                email:resp.usuario.email
            })
            return true;
        }else{
            setAuth({
                uid:null,
                logged:false,
                nombre:null,
                email:null
            })
            return false;
        }
    },[]);

    const logout = ()=>{

    }

    return (
        <AuthContext.Provider value={{
            auth,
            login,
            verificaToken,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}