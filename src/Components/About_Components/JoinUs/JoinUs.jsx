import React from 'react';
import { Link } from 'react-router-dom';

function JoinUs() {
    return (
        <section className='join-us py-7' id='join-us'>
            <div className='container'>
                <div className='bg-white p-3 sm:p-5 md:p-7 lg:p-10 rounded-xl flex max-md:flex-col md:items-center gap-7'>
                    {/* Text Wrapper */}
                    <div className='text-wrapper space-y-2 md:flex-1'>
                        <h1 className='text-2xl md:text-4xl font-semibold'><span className='text-orange-color-50'>Together</span>, let's shape the future of digital innovation</h1>
                        <p className='text-grey-color-30'>Join us on this exciting learning journey and unlock your potential in design and development.</p>
                    </div>
                    {/* Join Now Link */}
                    <Link
                        to={'/'}
                        className='block py-2 px-4 rounded-md bg-orange-color-50 text-white max-md:text-center'
                    >
                        Join Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default JoinUs;