import './InProgress.css'
import { Link } from 'react-router-dom'

export default function InProgress() {
    return (
        <>
            <div className="cute_div">
                <div>
                    <h1> ¡Estámos trabajando todavía en esto! </h1>
                    <Link to="/"> Volver </Link>
                </div>
                <img className="nav-logo" src="images/estamos_trabajando.png" style={{ maxBlockSize: 400 }} />
            </div>

        </>
    )
}