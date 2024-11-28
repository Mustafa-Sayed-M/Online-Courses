import React from 'react';
import Landing from '../Components/Shared_Components/Landing/Landing';
import Faq from '../Components/Shared_Components/Faq/Faq';
import PricingCards from '../Components/Shared_Components/PricingCards/PricingCards';
import PricingSelector from '../Components/Shared_Components/PricingSelector';

function Pricing() {
    return (
        <div className='pricing-page'>
            {/* Landing */}
            <Landing
                title={`Our Pricing`}
                description={`Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.`}
            />
            {/* Container */}
            <div className='container py-10 space-y-7'>
                {/* Pricing Selector */}
                <PricingSelector />
                {/* Pricing Cards */}
                <PricingCards />
            </div>
            {/* Faq */}
            <Faq />
        </div>
    )
}

export default Pricing;