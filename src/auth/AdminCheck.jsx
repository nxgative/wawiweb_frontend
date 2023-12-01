import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function AdminCheck() {
    const { token } = useContext(AuthContext);
    const [msg, setMsg] = useState("");
    config = {
        "method": "get",
        "url": `${import.meta.env.VITE_BACKEND_URL}/scope/protectedadmin`,
        "headers": { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        axios(config)
            .then(response => {
                console.log("WENA PO ADMIN");
                setMsg(response.data.msg);
            })
            .catch(error => {
                console.log(error);
                setMsg("Error al obtener datos del admin");
            })
    }, [])

    return (
        <h1>{msg}</h1>
    )
}

export default AdminCheck;