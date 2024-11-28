import React from 'react';
import AppLogo from '../../Shared_Components/AppLogo';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='pt-7 bg-white'>
            <div className='container'>
                {/* Content Grid */}
                <div className='content-grid py-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
                    {/* Contact Info */}
                    <div className='contact-info space-y-5 xl:col-span-2 2xl:col-span-3'>
                        {/* App Logo */}
                        <AppLogo />
                        {/* Contact */}
                        <ul className='space-y-2'>
                            {/* Email */}
                            <li className='flex items-center gap-2'>
                                <i className="fa-solid fa-envelope fa-fw"></i>
                                <span className='text-grey-color-15'>mustafacoder9@gmail.com</span>
                            </li>
                            {/* Phone */}
                            <li className='flex items-center gap-2'>
                                <i className="fa-solid fa-phone fa-fw"></i>
                                <span className='text-grey-color-15'>01122124968</span>
                            </li>
                            {/* Location */}
                            <li className='flex items-center gap-2'>
                                <i className="fa-solid fa-location-dot fa-fw"></i>
                                <span className='text-grey-color-15'>Kafr Hamza, El Khanka, Al Qalyubia</span>
                            </li>
                        </ul>
                    </div>
                    {/* Home Links */}
                    <div className='home-links'>
                        <h3 className='text-grey-color-15 font-medium mb-3'>Home</h3>
                        <ul>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Benefits</Link>
                            </li>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Our Courses</Link>
                            </li>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Our Testimonials</Link>
                            </li>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Our FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    {/* About Links */}
                    <div className='about-links'>
                        <h3 className='text-grey-color-15 font-medium mb-3'>About US</h3>
                        <ul>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Company</Link>
                            </li>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Achievements</Link>
                            </li>
                            <li className='text-grey-color-35'>
                                <Link to={'/'} className='block py-1 transition sm:hover:text-black'>Our Goals</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Social Links */}
                    <div className='social-links'>
                        <h3 className='text-grey-color-15 font-medium mb-3'>Social Profiles</h3>
                        <ul className='flex items-center gap-3'>
                            <li className='text-grey-color-35'>
                                <a href='https://www.facebook.com/mustafacoder9/' target='_blank' className='block text-2xl py-1 transition sm:hover:text-black' rel="noreferrer">
                                    <i className="fa-brands fa-facebook fa-fw"></i>
                                </a>
                            </li>
                            <li className='text-grey-color-35'>
                                <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BHK9RtQdkQsm7wvxIwWeOcA%3D%3D' target='_blank' className='block text-2xl py-1 transition sm:hover:text-black' rel="noreferrer">
                                    <i className="fa-brands fa-linkedin fa-fw"></i>
                                </a>
                            </li>
                            <li className='text-grey-color-35'>
                                <a href='https://www.instagram.com/must3fa_9/' target='_blank' className='block text-2xl py-1 transition sm:hover:text-black' rel="noreferrer">
                                    <i className="fa-brands fa-instagram fa-fw"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Split */}
                <hr />
                {/* Copyright */}
                <p className='text-center text-grey-color-40 py-3'>© 2024 Skillbridge. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;