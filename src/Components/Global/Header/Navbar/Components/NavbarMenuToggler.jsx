import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleOpenNavbarMenu } from '../../../../../Store/slices/appSlice';

function NavbarMenuToggler() {

    const dispatch = useDispatch();

    const { openNavbarMenu } = useSelector(state => state.app);

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(handleOpenNavbarMenu(!openNavbarMenu));
    };

    return (
        <button
            title=''
            aria-label='Navbar Menu Toggler'
            type='button'
            onClick={handleClick}
            className='navbar-menu-toggler text-2xl md:hidden'
        >
            <i className={`fa-solid fa-${openNavbarMenu ? "xmark" : "bars"} fa-fw`}></i>
        </button>
    )
}

export default NavbarMenuToggler;