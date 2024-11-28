import React from 'react';
import faqs from '../../../Data/faqs.json';
import { useDispatch, useSelector } from 'react-redux';
import { handleFaqsOpen, openAllFaqs } from '../../../Store/slices/appSlice';

function Faq() {

    const { faqsOpen } = useSelector(state => state.app);

    const dispatch = useDispatch();

    const handleToggleFaq = (id) => {
        dispatch(handleFaqsOpen(id));
    };

    const handleOpenAllFaqs = () => {
        if (faqsOpen.length === faqs.length) {
            dispatch(openAllFaqs([]));
        } else {
            dispatch(openAllFaqs([1, 2, 3, 4, 5]));
        }
    };

    return (
        <section className='faq' id='faq'>
            <div className='container py-7'>
                {/* Faqs Grid */}
                <div className='faqs-grid bg-white p-3 sm:p-5 md:p-7 lg:p-10 rounded-xl grid md:grid-cols-3 gap-7'>
                    {/* Text Wrapper */}
                    <div className='text-wrapper'>
                        <h1 className='font-semibold text-2xl text-grey-color-15 mb-3'>Frequently Asked Questions</h1>
                        <p className='text-grey-color-20 mb-3'>Still you have any questions? Contact our Team via support@skillbridge.com</p>
                        <button className='' onClick={handleOpenAllFaqs}>See All Faqs</button>
                    </div>
                    {/* Faqs */}
                    <div className='faqs space-y-2 md:col-span-2'>
                        {faqs.map((faq, index) => <div className={`faq-card p-3 rounded-md border border-white-color-95 shadow-md transition ${faqsOpen.includes(faq.id) && "border-orange-color-50"}`} key={index}>
                            {/* Header */}
                            <div className='header flex items-center gap-3'>
                                {/* Question */}
                                <h2 className='flex-1'>{faq.question}</h2>
                                {/* Toggler */}
                                <button
                                    type='button'
                                    aria-label='Faq Toggler'
                                    title={faqsOpen.includes(faq.id) ? "Close Faq" : "Open Faq"}
                                    onClick={() => handleToggleFaq(faq.id)}
                                    className='w-10 h-10 flex items-center justify-center p-2 rounded-md bg-orange-color-95 text-grey-color-15'
                                >
                                    <i className={`fa-solid fa-plus transition ${faqsOpen.includes(faq.id) && "rotate-45"}`}></i>
                                </button>
                            </div>
                            {/* Answer */}
                            {
                                faqsOpen.includes(faq.id) && (<p className='text-grey-color-15 mt-5'>{faq.answer}</p>)
                            }
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;