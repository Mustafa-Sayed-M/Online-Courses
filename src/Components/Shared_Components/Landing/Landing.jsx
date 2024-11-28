import React from 'react';

function Landing({ title, description }) {
    return (
        <section className='landing' id='landing'>
            <div className='container py-7 md:flex items-center gap-5 border-b border-b-white-color-90'>
                {/* Title */}
                <h1 className='text-grey-color-15 font-semibold text-3xl md:w-1/2 max-md:mb-4'>{title}</h1>
                {/* Description */}
                <p className='text-grey-color-35 md:w-1/2'>{description}</p>
            </div>
        </section>
    )
}

export default Landing;