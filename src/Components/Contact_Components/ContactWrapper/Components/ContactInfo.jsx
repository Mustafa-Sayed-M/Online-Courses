import React from 'react';
import IconWrapper from '../../../Shared_Components/IconWrapper';

const LinkContact = ({ href, fontAwesomeIconClass, text }) => {
    return (
        <a
            href={href}
            target='_blank'
            rel="noreferrer"
            className='email-contact block p-3 md:p-5 shadow-sm space-y-2 bg-white-color-99 border border-white-color-95 rounded-md sm:hover:bg-white-color-95 transition'
        >
            {/* Icon */}
            <IconWrapper
                bgColor={'bg-white-color-97'}
                borderColor={'border-white-color-95'}
                fontAwesomeIconClass={fontAwesomeIconClass}
            />
            {/* Text */}
            <p className='text-grey-color-30 text-center'>{text}</p>
        </a>
    )
};

const socialLinks = [
    { href: 'https://www.facebook.com/mustafacoder9/', fontAwesomeIconClass: 'facebook', title: 'Facebook' },
    { href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B2Z1TdqPdQ1eIvBDOhouMnw%3D%3D', fontAwesomeIconClass: 'linkedin', title: 'Linkedin' },
    { href: 'https://www.instagram.com/must3fa_9/', fontAwesomeIconClass: 'instagram', title: 'Instagram' },
    { href: 'https://github.com/Mustafa-Sayed-M', fontAwesomeIconClass: 'github', title: 'Github' },
];

function ContactInfo() {
    return (
        <div className='contact-info p-3 sm:p-5 md:p-7 lg:p-10 border-l border-l-[#f1f1f3] space-y-3'>
            {/* Email Contact */}
            <LinkContact
                href='mailto:mustafacoder9@gmail.com'
                fontAwesomeIconClass='fa-solid fa-envelope'
                text='mustafacoder9@gmail.com'
            />
            {/* Phone Contact */}
            <LinkContact
                href='https://wa.link/lwfls4'
                fontAwesomeIconClass='fa-solid fa-phone'
                text='01122124968'
            />
            {/* Location Info */}
            <LinkContact
                href='https://www.google.com/maps/place/Kafr+Hamza,+Al+Khankah,+Al-Qalyubia+Governorate/@30.2297981,31.3233489,16z/data=!3m1!4b1!4m6!3m5!1s0x1458124769fc74f9:0xd26dba9c8fbbb476!8m2!3d30.2324261!4d31.3270841!16s%2Fg%2F1v0bvxz6?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
                fontAwesomeIconClass='fa-solid fa-location-dot'
                text='Kafr Hamza, El Khanka, Al Qalyubia'
            />
            {/* Social Links */}
            <div className='social-links p-3 md:p-5 shadow-sm space-y-3 bg-white-color-99 border border-white-color-95 rounded-md transition'>
                <ul className='flex items-center justify-center gap-2'>
                    {socialLinks.map((link, index) => <li key={index}>
                        <a title={`Go To ${link.title} Profile`} href={link.href} className='text-grey-color-20 transition text-2xl' target='_blank' rel="noreferrer">
                            <IconWrapper
                                bgColor={`bg-white-color-97`}
                                borderColor={`bg-white-color-95`}
                                fontAwesomeIconClass={`fa-brands fa-${link.fontAwesomeIconClass} fa-fw`}
                            />
                        </a>
                    </li>)}
                </ul>
                <p className='text-grey-color-30 text-center'>Social Profiles</p>
            </div>
        </div>
    )
}

export default ContactInfo;