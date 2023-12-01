import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from './Button';

export default function Navbar() {
    return (
        <>
            <div className="main-nav-div">
                <nav className='navbar'>
                    <div className='nav-left'>
                        <Link to='/'><img className="nav-logo" src="images/logo2.png" style={{ maxBlockSize: 75 }} /></Link>
                    </div>
                    <div className='nav-right'>
                        <Link className='links' to="/Instructions">Instrucciones</Link>
                        <Link className='links' to="/Feedback">Feedback</Link>
                        <Link className='links' to="/Profile">Mi perfil</Link>
                    </div>
                </nav>

            </div>
        </>
    );
}