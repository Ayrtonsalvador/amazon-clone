import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <Link to='/'>
                <img className='footer__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
                    alt='footer-logo'/>
            </Link>
        </div>
    )
}

export default Footer
