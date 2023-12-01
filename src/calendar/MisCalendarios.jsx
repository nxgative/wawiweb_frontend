import { useState } from "react";
import { Link } from 'react-router-dom'
import './MisCalendarios.css'

export default function MisCalendarios() {
    return (
        <>
            <div className="Calendarios">
                <h1> Mis Calendarios </h1>
                <div className="imagen-div">
                    <img className="Personal" src="images/CalendarioPersonal.png" style={{ maxBlockSize: 200 }}/>
                    <Link id='first' className='am' to="/PersonalCalendar"><button>Mi Calendario Personal 1</button></Link>
                </div>
                <div className="imagen-div">
                    <img className="Grupal" src="images/CalendariosGrupales.png" style={{ maxBlockSize: 200 }}/>
                    <Link id='first' className='am' to="/GroupCalendar"><button>Calendario Grupal 1</button></Link>
                </div>
                <div className="imagen-div">
                    <img className="Grupal" src="images/CalendariosGrupales.png" style={{ maxBlockSize: 200 }}/>
                    <Link id='second' className='am' to="/GroupCalendar"><button>Calendario Grupal 2</button></Link>
                </div>
                <div className="imagen-div">
                    <img className="Grupal" src="images/CalendariosGrupales.png" style={{ maxBlockSize: 200 }}/>
                    <Link id='third' className='am' to="/GroupCalendar"><button>Calendario Grupal 3</button></Link>
                </div>
                    
            </div>
                    

            <div className="volver-link">
                <Link to="/MainPage"> Volver </Link>
            </div>
            
        </>
    )
}
