import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'



const Success = () => {
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');
    console.log(token);

    const saveUserToLocalStorage = (token) => {
        if (token) {
            localStorage.setItem("token", JSON.stringify(token));
        }
    }
     
   
    

    useEffect(() => {
        saveUserToLocalStorage(token);
    }
        , [token]);

    return (
        <div>
            <h1>Success</h1>
        </div>
    )
}

export default Success
