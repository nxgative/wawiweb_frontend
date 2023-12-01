import './Feedback.css'
import { Link } from 'react-router-dom'

export default function Feedback() {
    return (
        <>
            <div className="cute_div">
                    <h1> Queremos saber tu opinión </h1>
                    <h2> Aquí podrás entregar feedback a nuestra página</h2>
                    <div className='img'>
                        <img className='nav-logo' src="images/estamos_trabajando.png" style={{ maxBlockSize: 400 }} />
                    </div>
                    <h2> ¡Estámos trabajando en esto! </h2>
                    <Link to="/"> Volver </Link>
            </div>

        </>
    )
}