import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <div className='top-bar'>
            <div className='container py-3'>
                <div className='bg-orange-color-50 rounded-md p-3 text-white text-center'>
                    Free Courses 🌟 Sale Ends Soon, <Link to={''} className='underline'>Get It Now</Link>
                </div>
            </div>
        </div>
    )
}

export default TopBar;