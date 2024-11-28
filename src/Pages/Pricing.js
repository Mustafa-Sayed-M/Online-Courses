import React from 'react';
import Landing from '../Components/Shared_Components/Landing/Landing';
import Faq from '../Components/Shared_Components/Faq/Faq';

function Pricing() {
    return (
        <div className='pricing-page'>
            {/* Landing */}
            <Landing
                title={`Our Pricing`}
                description={`Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.`}
            />
            {/* Faq */}
            <Faq />
        </div>
    )
}

export default Pricing;