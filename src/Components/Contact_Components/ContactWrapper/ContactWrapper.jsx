import React from 'react';
import ContactForm from './Components/ContactForm';
import ContactInfo from './Components/ContactInfo';

function ContactWrapper() {
    return (
        <section className='contact-wrapper grid lg:grid-cols-3 gap-5 rounded-xl bg-white shadow-md' id='contact'>
            {/* Contact Form */}
            <ContactForm />
            {/* Contact Info */}
            <ContactInfo />
        </section>
    )
}

export default ContactWrapper;