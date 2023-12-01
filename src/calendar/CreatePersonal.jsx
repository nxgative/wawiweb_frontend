import { useState } from "react";
import { Link } from 'react-router-dom'
import './CreatePersonal.css'

export default function CreatePersonal() {
    return (
        <>
            <div>
                <div className="contenido-div">
                    <img className="Personal" src="images/img4.jpg" style={{ maxBlockSize: 650 }}/>
                    <button className="boton" >Crear Calendario</button>
                </div>
                    

                <div className="volver-link">
                <Link to="/MainPage"> Volver </Link>
                </div>
            </div>
        </>
    )
}