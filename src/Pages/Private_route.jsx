/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Auth_Context } from "../Provider/Auth_provider";
import { Navigate, useLocation } from "react-router-dom";

const Private_route = ({children}) => {
    const {user, loading} = useContext(Auth_Context);
    const location = useLocation();
    
    if (loading) {
        return <h1 className="text-4xl text-center font-semibold">LOADING....</h1>
    }
    if (!user) {
       return <Navigate state={{from:location.pathname}} to={'/login'}></Navigate>
    }
    return children
};

export default Private_route;