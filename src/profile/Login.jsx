import React, { useState, useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Register.css';
import { AuthContext } from '../auth/AuthContext';

//Funcion para ver en la base de datos si existe la cuenta
const Login = ({ username, password }) => {

    const { token, setToken } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    function display_MSG() {
        if (error) {
            return (
                <div className="error">
                    <p>{msg}</p>
                </div>
            )
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("entra aquí")
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/usuario/login`, {
            nombre: username,
            password: password
        }).then((response) => {
            setError(false);
            setMsg("Login exitoso!");
            // manejo token
            const access_token = response.data.access_token;
            setToken(access_token);
            navigate("/MainPage");
        }).catch((error) => {
            setError(true);
            setMsg(
                <>
                  Error al loggear al usuario. <br />
                  Por favor, comprueba tus credenciales.
                </>
              );
            console.log(error);
        })
    };

    return (
        <div className='error'>
            {{ error } && display_MSG()}
            <form onSubmit={handleSubmit}>
                <div className="links-div2">
                    <Link to="/MainPage" type='submit' onClick={(event) => {
                        event.preventDefault();
                        handleSubmit(event);
                    }}> Ingresar </Link>
                    <Link to="/InProgress"> Olvidé mi contraseña </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;