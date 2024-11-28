import React from 'react';
import Landing from '../Components/Shared_Components/Landing/Landing';
import Achievements from '../Components/About_Components/Achievements/Achievements';
import OurGoals from '../Components/About_Components/OurGoals/OurGoals';
import JoinUs from '../Components/About_Components/JoinUs/JoinUs';

function About() {
    return (
        <div className='about-page'>
            {/* Landing */}
            <Landing
                title={`About Skillbridge`}
                description={`Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.`}
            />
            {/* Achievements */}
            <Achievements />
            {/* Our Goals */}
            <OurGoals />
            {/* Join Us */}
            <JoinUs />
        </div>
    )
}

export default About;