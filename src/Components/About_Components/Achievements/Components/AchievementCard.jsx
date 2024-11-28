import React from 'react';

function AchievementCard({ achievementData }) {

    const { icon, title, description } = achievementData;

    return (
        <div className='achievement-card bg-white p-3 md:p-5 rounded-md shadow-md'>
            {/* Icon */}
            <div className='flex items-center justify-center w-10 h-10 bg-orange-color-97 border border-orange-color-90 mb-3 rounded-md p-2'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/${icon}`}
                    alt={title}
                />
            </div>
            {/* Title */}
            <h1 className='text-xl font-semibold mb-3 text-grey-color-15'>{title}</h1>
            {/* Description */}
            <p className='text-grey-color-35'>{description}</p>
        </div>
    )
}

export default AchievementCard;