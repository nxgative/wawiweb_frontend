import React, { useState, useContext } from 'react';
import './Register.css';
import axios from "axios";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';


const Register = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [vis, setVis] = useState(false);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");


    function handleChange(value, type) {
        if (type === "username") {
            //revisar si el usuario solo contiene letras y numeros
            setUsername(value);
        }
        else if (type === "password") {
            //revisar si la contraseña tiene al menos 4 caracteres, una letra, un numero y un caracter especial
            setPassword(value);
        }
        else if (type === "email") {
            //revisar que sea formato email
            setEmail(value);
        }
    }

    function visibility() {
        var x = document.getElementById("pw");
        if (x.type === "password") {
            x.type = "text";
            setVis(true);
        } else {
            x.type = "password";
            setVis(false);
        }
    }

    function display_MSG() {
        if (error) {
            return (
                <div className="error">
                    <p>{msg}</p>
                </div>
            )
        }
        else {
            return (
                <div className="success">
                    <p>{msg}</p>
                </div>
            )
        }
    }
    const handleClickRegister = async (event) => {
        event.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/usuario/register`, {
            nombre: username,
            mail: email,
            password: password
        })
            .then((response) => {
                setError(false);
                setMsg("Has podido registrado exitosamente! Por favor, inicia sesión.");
            })
            .catch((error) => {
                setError(true);
                setMsg(
                    <>
                      Error al crear usuario. <br />
                      Por favor, Inténtelo nuevamente.
                    </>
                  );
                setMsg("Ha ocurrido un error al crear al usuario. Por favor, inténtelo nuevamente.");
                console.log("Recordar, clave necesita ser de 4 caracteres, compuestos por al menos una letra un numero y un caracter especial");
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div>
                <form onSubmit={handleClickRegister} className="Postform">
                    <div className='user-div'>
                        <h2>Sign up</h2>
                        <div className="user-info-div2">
                            <h3 className="label"> Usuario:</h3>
                            <input
                                placeholder="Nombre de usuario"
                                onChange={u => handleChange(u.target.value, "username")}
                            />

                        </div>
                        <div className="user-info-div2">
                            <h3 className="label">Mail:</h3>
                            <input
                                placeholder="Correo electrónico"
                                onChange={c => handleChange(c.target.value, "email")}
                            />
                        </div>
                        <div className="user-info-div3">
                            <h3 className="label">Contraseña:</h3>
                            <div className='password-container2'>
                                <input id='pw' type={vis ? "text" : "password"} placeholder="Contraseña alfanumérica"
                                    onChange={c => handleChange(c.target.value, "password")} />
                                {vis ? <AiFillEye onClick={visibility} /> : <AiFillEyeInvisible onClick={visibility} />}
                            </div>
                        </div>
                        {msg.length > 0 && display_MSG()}
                    </div>
                    <button className='crear_butt' type='submit'> Crear cuenta </button>
                </form>
            </div>
        </>
    )
}

export default Register;