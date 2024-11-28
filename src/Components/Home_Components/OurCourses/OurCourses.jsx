import React from 'react';
import courses from '../../../Data/courses.json';
import CourseCard from './Components/CourseCard';
import HeadSection from '../../Shared_Components/HeadSection';
import { Link } from 'react-router-dom';

function OurCourses() {
    return (
        <section className='our-courses py-7' id='our-courses'>
            <div className='container'>
                {/* Header */}
                <div className='header mb-7 flex max-md:flex-col items-center gap-5'>
                    {/* Head Section */}
                    <HeadSection
                        title={`Our Courses`}
                        description={`Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.`}
                    />
                    {/* View All */}
                    <Link to={'/courses'} className='block bg-white-color-99 border border-white-color-95 rounded-md py-2 px-4'>
                        View All
                    </Link>
                </div>
                {/* Courses Grid */}
                <div className='courses-grid grid md:grid-cols-2 gap-5'>
                    {courses.map((course, index) => <CourseCard
                        key={index}
                        courseData={course}
                    />)}
                </div>
            </div>
        </section>
    )
}

export default OurCourses;