import React from 'react';

function Companies() {
    return (
        <div className='companies flex-wrap bg-white-color-99 border border-white-color-97 p-3 md:p-5 rounded-xl shadow-sm flex items-center justify-between gap-3'>
            <img
                src={`${process.env.PUBLIC_URL}/assets/companies/1.png`}
                alt={'company 1'}
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/companies/2.png`}
                alt={'company 2'}
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/companies/3.png`}
                alt={'company 3'}
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/companies/4.png`}
                alt={'company 4'}
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/companies/5.png`}
                alt={'company 5'}
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/companies/6.png`}
                alt={'company 6'}
            />
        </div>
    )
}

export default Companies;