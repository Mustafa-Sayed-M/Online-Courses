import React from 'react';
import HeadSection from '../../Shared_Components/HeadSection';
import testimonials from '../../../Data/testimonials.json';
import { Link } from 'react-router-dom';

function OurTestimonials() {
    return (
        <section className='our-testimonials py-7' id='our-testimonials'>
            <div className='container'>
                {/* Header */}
                <div className='header mb-7 flex max-md:flex-col items-center gap-5'>
                    {/* Head Section */}
                    <HeadSection
                        title={`Our Testimonials`}
                        description={`Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.`}
                    />
                    {/* View All */}
                    <Link to={'/'} className='block bg-white-color-99 border border-white-color-95 rounded-md py-2 px-4'>
                        View All
                    </Link>
                </div>
                {/* Testimonials Grid */}
                <div className='testimonials-grid grid md:grid-cols-2 gap-5'>
                    {testimonials.map((testimonial, index) => <div className='testimonial-card bg-white rounded-xl' key={index}>
                        {/* Content */}
                        <div className='content p-3 md:p-5'>
                            <p className='text-grey-color-20'>{testimonial.content}</p>
                        </div>
                        {/* Split */}
                        <hr />
                        {/* Info */}
                        <div className='info p-3 md:p-5 flex max-sm:flex-col gap-3 items-center justify-between'>
                            {/* Author */}
                            <div className='author flex items-center gap-2 max-sm:w-full'>
                                {/* Avatar */}
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/${testimonial.author.avatar}`}
                                    alt={testimonial.author.name}
                                />
                                {/* Name */}
                                {testimonial.author.name}
                            </div>
                            {/* Read Full Story */}
                            <Link
                                to={`/`}
                                className='block max-sm:w-full text-center py-2 px-4 rounded-md bg-white-color-97 border border-white-color-95 text-grey-color-15 font-medium sm:hover:bg-orange-color-50 sm:hover:border-orange-color-50 transition'
                            >
                                Read Fully Story
                            </Link>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default OurTestimonials;