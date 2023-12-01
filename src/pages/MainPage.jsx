import './MainPage.css'
import { Link } from 'react-router-dom'
import "../components/Button.css"

export default function MainPage() {
    return (
        <>
            <div>
                <div className='Create'>
                    <img src="/images/create3.PNG" className="imagen" alt="imagen" style={{ maxBlockSize: 500 }} />
                    <Link id='first' className='am' to="/MisCalendarios"><button>Ver mis calendarios</button></Link>

                </div>

                <div className='Create'>
                    <Link id='second' to="/CreatePersonal"><button>Crear un calendario personal</button></Link>
                    <img src="/images/create2.PNG" className="imagen" alt="imagen" style={{ maxBlockSize: 600 }} />

                </div>

                <div className='Create'>
                    <img src="/images/create1.PNG" className="imageb" alt="imagen" style={{ maxBlockSize: 400 }} />
                    <Link id='third' to="/CreateGroup"><button>Crear un calendario grupal</button></Link>
                </div>
            </div>
        </>
    )
}
