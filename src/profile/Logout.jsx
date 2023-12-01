import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import './MyProfile.css';

const LogoutButton = () => {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);
    const [msg, setMsg] = useState("");

    const handleClick = () => {
        logout();
        setMsg("Sesión cerrada con éxito.");
        navigate('/');
    }

    return (
        <>
            {msg.length > 0 && <div className='successLogout'> {msg} </div>}
            <button className='greyButton' onClick={handleClick}> Cerrar sesión </button>
        </>
    )
}

export default LogoutButton;