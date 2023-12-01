import './Profile.css'
import { Link } from 'react-router-dom'

export default function Profile() {
    return (
        <>
            <div className="cute_div">
                    <h1> Edita tu perfil</h1>
                    <h2> Aquí podrás editar tu información personal </h2>
                    <div className='img'>
                        <img className='nav-logo' src="/images/Slides/Slide5.jpg" style={{ maxBlockSize: 400 }} />
                    </div>
                    <h2> ¡Estámos trabajando en esto! </h2>
                    <Link to="/"> Volver </Link>
            </div>

        </>
    )
}