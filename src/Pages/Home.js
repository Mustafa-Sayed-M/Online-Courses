import React from 'react';
import Landing from '../Components/Home_Components/Landing/Landing';
import Benefits from '../Components/Home_Components/Benefits/Benefits';
import OurCourses from '../Components/Home_Components/OurCourses/OurCourses';
import OurTestimonials from '../Components/Home_Components/OurTestimonials/OurTestimonials';
import OurPricing from '../Components/Home_Components/OurPricing/OurPricing';
import Faq from '../Components/Shared_Components/Faq/Faq';

function Home() {
    return (
        <div className='home-page'>
            {/* Landing */}
            <Landing />
            {/* Benefits */}
            <Benefits />
            {/* Our Courses */}
            <OurCourses />
            {/* Our Testimonials */}
            <OurTestimonials />
            {/* Our Pricing */}
            <OurPricing />
            {/* Faq */}
            <Faq />
        </div>
    )
}

export default Home;