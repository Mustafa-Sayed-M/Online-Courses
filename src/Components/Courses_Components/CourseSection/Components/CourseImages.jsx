import React from 'react';

function CourseImages({ courseData }) {

    const {
        name,
        images,
    } = courseData;

    return (
        <div className='images flex flex-wrap items-center gap-3'>
            {images.map((image, index) => <div className='md:flex-1 max-md:w-full' key={index}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${image}`}
                    alt={name}
                    className='w-full object-cover'
                />
            </div>)}
        </div>
    )
}

export default CourseImages;