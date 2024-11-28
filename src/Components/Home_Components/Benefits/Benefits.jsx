import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import benefits from '../../../Data/benefits.json';
import BenefitCard from './Components/BenefitCard';

function Benefits() {
    return (
        <section className='benefits py-7' id='benefits'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Benefits`}
                    description={`Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.`}
                />
                {/* Benefits Grid */}
                <div className='achievements-grid grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {benefits.map((benefit, index) => <BenefitCard key={index} benefitData={benefit} />)}
                </div>
            </div>
        </section>
    )
}

export default Benefits;