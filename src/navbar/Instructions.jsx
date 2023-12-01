import Carousel from 'react-bootstrap/Carousel';
import './Instructions.css';

export function Instructions() {
    return (
        <>
        <h1> Instrucciones </h1>
    
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img className='img1' src="/images/Slides/Slide1.jpg"></img>
                <Carousel.Caption>
                    <p>1. Registrar tu cuenta: Necesitas crear un usuario y asignarle una contraseña.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img1' src="/images/Slides/Slide2.jpg"></img>
                <Carousel.Caption>
                    <p>2. Iniciar sesión: Al iniciar sesión tendrás acceso a diferentes funcionalidades de la página.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img1' src="/images/Slides/Slide3.jpg"></img>
                <Carousel.Caption>
                    <p>3. Calendario Personal: Puedes editar tu calendario propio, en donde podrás anotar tus eventos y actividades que tengas programadas a futuro. Este calendario es privado, es decir que no puede ser editado por usuarios externos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img1' src="/images/Slides/Slide4.jpg"></img>
                <Carousel.Caption>
                    <p>4. Calendario Grupal: Aquí podrás visualizar los diferentes calendarios que compartas con tus amigos. Cada calendario tendrá anotados los diferentes eventos de cada integrante del grupo, para poder ver la disponibilidad de cada uno. Los demás integrantes no pueden modificar tu calendario personal.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img1' src="/images/Slides/Slide5.jpg"></img>
                <Carousel.Caption>
                    <p>5. Mi perfil: Aquí puedes visualizar tu perfil y editarlo si es que así lo deseas. Puedes cambiar tu nombre de usuario y foto de perfil a tu gusto.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default Instructions;
