import React from 'react';
import Landing from '../Components/Shared_Components/Landing/Landing';
import courses from '../Data/courses.json';
import CourseSection from '../Components/Courses_Components/CourseSection/CourseSection';

function Courses() {
    return (
        <div className='courses-page'>
            {/* Landing */}
            <Landing
                title={`Online Courses on Design and Development`}
                description={`Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.`}
            />
            {/* Container */}
            <div className='container py-7'>
                {/* Courses Wrapper */}
                <div className='courses-wrapper space-y-7'>
                    {courses.map((course, index) => <CourseSection
                        key={index}
                        courseData={course}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Courses;