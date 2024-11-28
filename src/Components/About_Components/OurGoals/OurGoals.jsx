import React from 'react';
import goals from '../../../Data/goals.json';
import GoalCard from './Components/GoalCard';
import HeadSection from '../../Shared_Components/HeadSection';

function OurGoals() {
    return (
        <section className='our-goals py-7' id='our-goals'>
            <div className='container'>
                {/* Head Section */}
                <HeadSection
                    title={`Our Goals`}
                    description={`At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
Through our carefully crafted courses, we aim to`}
                />
                {/* Goals Grid */}
                <div className='achievements-grid grid md:grid-cols-2 gap-5'>
                    {goals.map((goal, index) => <GoalCard key={index} goalData={goal} />)}
                </div>
            </div>
        </section>
    )
}

export default OurGoals;