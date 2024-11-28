import React from 'react'

const CurriculumItem = ({ curriculumData, index }) => {
    return (
        <div
            className='curriculum-item p-3'
        >
            <h1 className='font-semibold text-3xl mb-2 text-grey-color-15'>0{index + 1}</h1>
            <p className='text-grey-color-20'>{curriculumData.name}</p>
        </div>
    )
};

function Curriculum({ courseData }) {

    const {
        curriculum
    } = courseData;

    return (
        <div className='curriculum border border-white-color-90 rounded-xl'>
            <div className='text-grey-color-15 font-medium p-3 border-b border-b-white-color-90'>Curriculum</div>
            {/* Curriculum Items Grid */}
            <div className='curriculum-items-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-3'>
                {curriculum.map((curriculumItem, index) => <CurriculumItem index={index} key={index} curriculumData={curriculumItem} />)}
            </div>
        </div>
    )
}

export default Curriculum;