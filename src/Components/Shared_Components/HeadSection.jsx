import React from 'react';

function HeadSection({ title, description }) {
    return (
        <div className='head-section mb-7'>
            <h1 className='text-grey-color-15 font-semibold text-3xl mb-2'>{title}</h1>
            <p className='text-grey-color-20'>{description}</p>
        </div>
    )
}

export default HeadSection;