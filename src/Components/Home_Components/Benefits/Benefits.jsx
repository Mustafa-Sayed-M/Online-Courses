import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import benefits from '../../../Data/benefits.json';
import BenefitCard from './Components/BenefitCard';
import { Link } from 'react-router-dom';

function Benefits() {
    return (
        <section className='benefits py-7' id='benefits'>
            <div className='container'>
                {/* Header */}
                <div className='header mb-7 flex max-md:flex-col items-center gap-5'>
                    {/* Head Section */}
                    <HeadSection
                        title={`Benefits`}
                        description={`Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.`}
                    />
                    {/* View All */}
                    <Link to={'/'} className='block bg-white-color-99 border border-white-color-95 rounded-md py-2 px-4'>
                        View All
                    </Link>
                </div>
                {/* Benefits Grid */}
                <div className='achievements-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {benefits.map((benefit, index) => <BenefitCard key={index} benefitData={benefit} />)}
                </div>
            </div>
        </section>
    )
}

export default Benefits;