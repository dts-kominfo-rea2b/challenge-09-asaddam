// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Call a Friend</h1>
            <h6 className='header__subtitle'>your friendly contact app</h6>
        </header>
    )
}

export default Header;