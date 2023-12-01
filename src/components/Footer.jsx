import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer-main-div">
            <footer>
                <div className='footer-left'>
                    <h3>Encuéntranos</h3>
                    <div className='social'> 
                        <a href='https://www.facebook.com/'> <img className="social-img" src='/images/facebook.png' style={{ maxBlockSize: 30 }} /> </a>
                        <a href='https://www.instagram.com/'> <img className="social-img" src='/images/instagram.png' style={{ maxBlockSize: 30 }}/> </a>
                        <a href='https://www.twitter.com/'> <img className="social-img" src='/images/twitter.png' style={{ maxBlockSize: 35 }} /> </a>
                    </div>
                </div>

            </footer>
        </div>
    );
};
