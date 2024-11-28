import React from 'react'
import { Link } from 'react-router-dom';

function BenefitCard({ benefitData }) {

    const { id, title, description } = benefitData;

    return (
        <div className='benefit-card bg-white p-3 md:p-5 rounded-md shadow-md'>
            {/* Counter */}
            <h1 className='counter font-bold text-4xl text-end mb-3'>0{id}</h1>
            {/* Title */}
            <h1 className='text-xl font-semibold mb-3 text-grey-color-15'>{title}</h1>
            {/* Description */}
            <p className='text-grey-color-35 mb-3'>{description}</p>
            {/* Link */}
            <Link
                to={`'`}
                className='ms-auto flex items-center justify-center w-10 h-10 bg-orange-color-97 border border-orange-color-90 mb-3 rounded-md p-2 text-2xl text-orange-color-50'
            >
                <i className="fa-solid fa-arrow-up rotate-45"></i>
            </Link>
        </div>
    )
}

export default BenefitCard;