import React from 'react';
import Landing from '../Components/Shared_Components/Landing/Landing';
import ContactWrapper from '../Components/Contact_Components/ContactWrapper/ContactWrapper';

function Contact() {
    return (
        <div className='contact-page'>
            {/* Landing */}
            <Landing
                title={`Contact Us`}
                description={`Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.`}
            />
            {/* Container */}
            <div className='container py-10'>
                {/* Contact Wrapper */}
                <ContactWrapper />
            </div>
        </div>
    )
}

export default Contact;