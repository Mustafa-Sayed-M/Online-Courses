import React from 'react';
import { Link } from 'react-router-dom';
import Curriculum from './Components/Curriculum';
import CourseImages from './Components/CourseImages';

function CourseSection({ courseData }) {

    const {
        id,
        name,
        description,
        duration,
        level,
        teacher
    } = courseData;

    const infoStyles = `py-2 px-4 bg-white-color-99 border border-white-color-90 rounded-md text-grey-color-35 font-medium text-sm`;

    return (
        <section className='course-section shadow-md p-3 md:p-5 bg-white rounded-xl space-y-7'>
            {/* Header */}
            <div className='header flex max-md:flex-col items-center gap-5'>
                {/* Text Wrapper */}
                <div className='text-wrapper space-y-2 flex-1'>
                    {/* Name */}
                    <h3 className='font-medium text-grey-color-15'>{name}</h3>
                    {/* Description */}
                    <p className='text-grey-color-35'>{description}</p>
                </div>
                {/* Course Link */}
                <Link
                    to={`/courses/${id}`}
                    className='block max-md:w-full text-center py-2 px-4 bg-white-99 border border-white-color-90 rounded-md sm:hover:bg-orange-color-50 sm:hover:border-orange-color-50 sm:hover:text-white transition'
                >
                    View Course
                </Link>
            </div>
            {/* Images */}
            <CourseImages courseData={courseData} />
            {/* Info */}
            <div className='info flex items-center gap-2'>
                <div className={`${infoStyles}`}>{duration}</div>
                <div className={`${infoStyles}`}>{level}</div>
                <div className={`${infoStyles} ms-auto`}>{teacher}</div>
            </div>
            {/* Curriculum */}
            <Curriculum courseData={courseData} />
        </section>
    )
}

export default CourseSection;