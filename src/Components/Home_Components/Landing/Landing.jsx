import React from 'react';
import { Link } from 'react-router-dom';
import Companies from './Components/Companies';
import VideoContainer from './Components/VideoContainer';

function Landing() {
    return (
        <section className='landing py-7' id='landing'>
            <div className='container space-y-5'>
                {/* Head */}
                <div className='head space-y-7 py-10'>
                    {/* Text Wrapper */}
                    <div className='text-wrapper text-center space-y-2'>
                        <div className='flex items-center gap-2 bg-white-color-99 w-fit mx-auto p-3 border border-white-color-95 shadow-sm'>
                            {/* Icon */}
                            <div className='flex items-center justify-center w-10 h-10 bg-orange-color-97 border border-orange-color-90 mb-3 rounded-md p-2 text-grey-color-15'>
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h1 className='font-bold sm:text-2xl md:text-4xl'><span className='text-orange-color-50'>Unlock</span> Your Creative Potential</h1>
                        </div>
                        <h2 className='font-semibold text-sm sm:text-2xl md:text-3xl'>with Online Design and Development Courses.</h2>
                        <h3 className='text-grey-color-15'>Learn from Industry Experts and Enhance Your Skills.</h3>
                    </div>
                    {/* Links */}
                    <div className='flex items-center justify-center gap-2'>
                        {/* Explore Courses */}
                        <Link
                            to={'/courses'}
                            className='block py-2 px-4 font-medium rounded-md text-white bg-orange-color-50'
                        >
                            Explore Courses
                        </Link>
                        {/* View Pricing */}
                        <Link
                            to={'/pricing'}
                            className='block py-2 px-4 font-medium'
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
                {/* Companies */}
                <Companies />
                {/* Video Container */}
                <VideoContainer />
            </div>
        </section>
    )
}

export default Landing;