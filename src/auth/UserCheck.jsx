import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function UserCheck({ onLoginStatusChange }) {
    const { token } = useContext(AuthContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [msg, setMsg] = useState("");
    const config = {
        "method": "get",
        "url": `${import.meta.env.VITE_BACKEND_URL}/scope/protecteduser`,
        "headers": { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        axios(config)
            .then(response => {
                onLoginStatusChange(true); // call the callback function with true
            })
            .catch(error => {
                console.log(error);
                onLoginStatusChange(false); // call the callback function with true

            })
    }, [])
    return null;
}

export default UserCheck;