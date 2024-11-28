import React from 'react';
import AppLogo from '../../../Shared_Components/AppLogo';
import NavbarLinks from './Components/NavbarLinks';
import NavbarAuthLinks from './Components/NavbarAuthLinks';
import NavbarMenuToggler from './Components/NavbarMenuToggler';

function Navbar() {
    return (
        <nav>
            <div className='container min-h-[60px] flex flex-wrap items-center gap-5 py-3'>
                {/* Logo */}
                <AppLogo />
                {/* Links */}
                <NavbarLinks />
                {/* Auth Links */}
                <NavbarAuthLinks />
                {/* Navbar Menu Toggler */}
                <NavbarMenuToggler />
            </div>
        </nav>
    )
}

export default Navbar;