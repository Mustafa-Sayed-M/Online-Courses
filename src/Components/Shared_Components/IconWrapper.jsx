import React from 'react';

function IconWrapper({ bgColor, borderColor, fontAwesomeIconClass }) {
    return (
        <div className={`${bgColor} ${borderColor && "border " + borderColor} w-10 h-10 leading-10 text-xl rounded-md text-center mx-auto`}>
            <i className={`${fontAwesomeIconClass} fa-fw`}></i>
        </div>
    )
}

export default IconWrapper;