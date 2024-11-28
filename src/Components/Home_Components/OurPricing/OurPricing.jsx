import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import PricingCards from '../../Shared_Components/PricingCards/PricingCards';
import PricingSelector from '../../Shared_Components/PricingSelector';

function OurPricing() {
    return (
        <section className='our-pricing py-7' id='our-pricing'>
            <div className='container'>
                {/* Header */}
                <div className='header mb-7 flex max-md:flex-col items-center gap-5'>
                    {/* Head Section */}
                    <HeadSection
                        title={`Our Pricing`}
                        description={`Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.`}
                    />
                    {/* Pricing Toggler */}
                    <PricingSelector />
                </div>
                {/* Pricing Cards */}
                <PricingCards />
            </div>
        </section>
    )
}

export default OurPricing;