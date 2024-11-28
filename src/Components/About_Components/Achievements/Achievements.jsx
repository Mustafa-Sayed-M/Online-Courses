import React from 'react';
import achievements from '../../../Data/achievements.json';
import AchievementCard from './Components/AchievementCard';
import HeadSection from '../../Shared_Components/HeadSection';

function Achievements() {
    return (
        <section className='achievements py-7' id='achievements'>
            <div className='container'>
                {/* Header */}
                <div className='header mb-7'>
                    {/* Head Section */}
                    <HeadSection
                        title={`Achievements`}
                        description={`Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements`}
                    />
                </div>
                {/* Achievements Grid */}
                <div className='achievements-grid grid md:grid-cols-2 gap-5'>
                    {achievements.map((achievement, index) => <AchievementCard key={index} achievementData={achievement} />)}
                </div>
            </div>
        </section>
    )
}

export default Achievements;