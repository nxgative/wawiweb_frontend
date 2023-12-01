import './Profile.css'
import { Link } from 'react-router-dom'
export default function ProfileInstructions() {
    return (
        <>
            <div className="cute_div">
                <h1> ¡Edita tu perfil! </h1>
                <h2> Aquí podrás editar tu información personal </h2>
                <div className='img'>
                    <img className='nav-logo' src="/images/Slides/Slide5.jpg" style={{ maxBlockSize: 400 }} />
                </div>
                <h5> ¡Recuerda crear una cuenta para poder acceder a estos features! </h5>
                <Link to="/"> <button> Ir a crear mi cuenta </button > </Link>
            </div>

        </>
    )
}