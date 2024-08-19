import React, { useContext } from 'react';
import { Authcontext } from '../provider/AuthProvider';
import { useRouter } from 'next/navigation';

const PrivateRoute = ({children}) => {

    const {authtoken, loading}=useContext(Authcontext)
    if(loading){
        return <div>Loading...</div>
    }
    const router=useRouter()
    if(!authtoken){
       return router.push('/login')
       
    }
    

    return <>{children}</>
};

export default PrivateRoute;