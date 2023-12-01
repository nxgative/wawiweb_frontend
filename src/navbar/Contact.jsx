import './Contact.css'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <div className="cute_div">
                    <h1> Contáctanos </h1>
                    <h2> Aquí podrás encontrar nuestra información de contacto</h2>
                    <div className='img'>
                        <img className='nav-logo' src="images/estamos_trabajando.png" style={{ maxBlockSize: 400 }} />
                    </div>
                    <h2> ¡Estámos trabajando en esto! </h2>
                    <Link to="/"> Volver </Link>
            </div>

        </>
    )
}