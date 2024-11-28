import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../Data/courses.json';
import Landing from '../Components/Shared_Components/Landing/Landing';

function Course() {

    const { courseId } = useParams();

    const {
        name,
        description,
        curriculum,
        images
    } = courses[courseId - 1];

    return (
        <div className='course-page'>
            {/* Landing */}
            <Landing
                title={name}
                description={description}
            />
            {/* Container */}
            <div className='container py-7'>
                {/* Image */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${images[0]}`}
                    alt={name}
                    className='w-full h-[500px] rounded-xl object-cover mb-7'
                />
                {/* Curriculum Gird */}
                <div className='curriculum-grid grid md:grid-cols-2 gap-5'>
                    {curriculum.map((curriculumItem, index) => <div className='curriculum-item p-3 md:p-5 bg-white rounded-xl space-y-3' key={index}>
                        {/* Counter */}
                        <h1 className='counter-curriculum font-semibold text-4xl text-end text-grey-color-15'>0{index + 1}</h1>
                        {/* Name */}
                        <h3 className='text-grey-color-15 font-medium'>{curriculumItem.name}</h3>
                        {/* Lessons */}
                        <ul className='space-y-3'>
                            {curriculumItem.lessons.map((lesson, index) => <li key={index} className='p-3 rounded-md border border-white-color-95 flex items-center gap-3 sm:hover:border-orange-color-50 cursor-pointer transition'>
                                <div className='flex-1'>
                                    {/* Name */}
                                    <h4>{lesson.name}</h4>
                                    {/* Counter */}
                                    <p className='counter-lesson text-grey-color-35'>Lesson 0{index + 1}</p>
                                </div>
                                {/* Duration */}
                                <div className='duration-lesson py-2 px-4 rounded-md bg-white-color-97 text-grey-color-35'>
                                    <i className="fa-regular fa-clock"></i>
                                    <span className='ml-2'>{lesson.duration}</span>
                                </div>
                            </li>)}
                        </ul>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Course;