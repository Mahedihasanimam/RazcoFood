
'use client'
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { createContext, useEffect, useState } from 'react';

export const Authcontext=createContext()
const AuthProvider = ({children}) => {
    const [authtoken,setAuthToken]=useState(null)
    const [loading,setLoading]=useState(null)
    const [user,setUser]=useState(null)
   
    const router=useRouter()
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setAuthToken(token);
                setUser(decodedUser);
            } catch (error) {
                console.error("Token decoding failed:", error);
                localStorage.removeItem('token');
              
            }
        } 
        setLoading(false);
    },[])
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null)
        setAuthToken(null);
       
      };
   const authinfo={
    user,
    authtoken,
    loading,
    logout,
    }
    if(loading){
        return <p>loading......</p>
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {!loading && children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;