import React from 'react';
import courses from '../../../Data/courses.json';
import CourseCard from './Components/CourseCard';
import HeadSection from '../../Shared_Components/HeadSection';

function OurCourses() {
    return (
        <section className='our-courses py-7' id='our-courses'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Our Courses`}
                    description={`Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.`}
                />
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