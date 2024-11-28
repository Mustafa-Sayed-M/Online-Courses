import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const linksData = [
    { to: '/', text: 'Home' },
    { to: '/courses', text: 'Courses' },
    { to: '/about', text: 'About Us' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/contact', text: 'Contact' },
];

function NavbarLinks() {

    const { openNavbarMenu } = useSelector(state => state.app);

    return (
        <ul className={`links flex items-center max-md:flex-col max-md:w-full max-md:order-1 max-md:space-y-1 ${!openNavbarMenu && "max-md:hidden"}`}>
            {linksData.map((link, index) => <li key={index} className='max-md:w-full'>
                <NavLink
                    to={link.to}
                    className={({ isActive }) => `${isActive ? "text-orange-color-50" : "sm:hover:text-orange-color-50"} max-md:bg-white-color-95 max-md:border max-md:border-white-color-90 transition block py-2 px-4`}
                >
                    {link.text}
                </NavLink>
            </li>)}
        </ul>
    )
}

export default NavbarLinks;