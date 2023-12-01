import { useState } from "react";
import { Link } from 'react-router-dom'
import './CreateGroup.css'

export default function CreateGroup() {
    return (
        <>
            <div>
                <div className="contenido-div">
                    <img className="Personal" src="images/img3.jpg" style={{ maxBlockSize: 650 }}/>
                    <button className="boton" >Crear grupo</button>
                </div>
                    

                <div className="volver-div">
                <Link to="/MainPage"> Volver </Link>
                </div>
            </div>
        </>
    )
}