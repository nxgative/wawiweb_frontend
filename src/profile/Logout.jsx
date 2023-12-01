import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const LogoutButton = () => {

    const { logout } = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const handleClick = () => {
        logout();
        setMsg("Sesión cerrada con éxito.");
    }

    return (
        <>
            {msg.length > 0 && <div className='successLogout'> {msg} </div>}
            <button onClick={handleClick}> Cerrar sesión </button>
        </>
    )
}