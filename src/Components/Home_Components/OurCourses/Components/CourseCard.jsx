import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({ courseData }) {

    const {
        id,
        name,
        description,
        duration,
        level,
        teacher,
        images
    } = courseData;

    const infoStyles = `py-2 px-4 bg-white-color-99 border border-white-color-90 rounded-md text-grey-color-35 font-medium text-sm`;

    return (
        <div className='course-card p-3 bg-white rounded-md shadow-md space-y-7'>
            {/* Image */}
            <img
                src={`${process.env.PUBLIC_URL}/assets/${images[0]}`}
                alt={name}
                className='w-full object-cover'
            />
            {/* Info */}
            <div className='info flex items-center gap-2'>
                <div className={`${infoStyles}`}>{duration}</div>
                <div className={`${infoStyles}`}>{level}</div>
                <div className={`${infoStyles} ms-auto`}>{teacher}</div>
            </div>
            {/* Text Wrapper */}
            <div className='text-wrapper space-y-2 flex-1'>
                {/* Name */}
                <h3 className='font-medium text-grey-color-15'>{name}</h3>
                {/* Description */}
                <p className='text-grey-color-35 line-clamp-3'>{description}</p>
            </div>
            {/* Get Course */}
            <Link
                to={`/courses/${id}`}
                className='block text-center py-2 px-4 rounded-md bg-white-color-97 border border-white-color-95 text-grey-color-15 font-medium sm:hover:bg-orange-color-50 sm:hover:border-orange-color-50 transition'
            >
                Get it Now
            </Link>
        </div>
    )
}

export default CourseCard;