import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const inputsData = [
    {
        id: 'firstName',
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter First Name',
        autoComplete: 'off',
    },
    {
        id: 'lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter Last Name',
        autoComplete: 'off',
    },
    {
        id: 'email',
        name: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Enter your Email',
        autoComplete: 'off',
    },
    {
        id: 'phone',
        name: 'phone',
        label: 'Phone',
        type: 'text',
        placeholder: 'Enter Phone Number',
        autoComplete: 'off',
    },
    {
        id: 'subject',
        name: 'subject',
        label: 'Subject',
        type: 'text',
        placeholder: 'Enter your Subject',
        autoComplete: 'off',
    }
];

const initialValues = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'phone': '',
    'subject': '',
    'message': '',
};

const validationSchema = {
    firstName: Yup.string()
        .min(2, 'First Name must be at least 2 characters long.')
        .max(50, 'First Name must be less than or equal to 50 characters long.')
        .required('First Name is required.'),
    lastName: Yup.string()
        .min(2, 'Last Name must be at least 2 characters long.')
        .max(50, 'Last Name must be less than or equal to 50 characters long.')
        .required('Last Name is required.'),
    email: Yup.string()
        .email('Please enter a valid email address.')
        .required('Email is required.'),
    phone: Yup.number()
        .required(),
    subject: Yup.string()
        .min(5, 'Subject must be at least 5 characters long.')
        .max(100, 'Subject must be less than or equal to 100 characters long.')
        .required('Subject is required.'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters long.')
        .max(500, 'Message must be less than or equal to 500 characters long.')
        .required('Message is required.'),
};

const FormikInput = ({ label, className, ...dataAttributes }) => {
    return (
        <div className={`formik-input ${className}`}>
            {/* Label */}
            <label htmlFor={dataAttributes.id}>{label}</label>
            {/* Input */}
            <input
                {...dataAttributes}
                className='focus:outline-none p-2 rounded-md w-full bg-white-color-99 border border-white-color-95 mt-2'
            />
            {/* Error Message */}
            <ErrorMessage component={'div'} name={dataAttributes.name} className='text-red-500 mt-2' />
        </div>
    )
};

function ContactForm() {
    return (
        <div className='contact-form lg:col-span-2 p-3 sm:p-5 md:p-7 lg:p-10'>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {/* Inputs Wrapper */}
                        <div className='inputs-wrapper grid sm:grid-cols-2 gap-3 mb-3'>
                            {inputsData.map((input, index) => <FormikInput
                                key={index}
                                {...{
                                    ...input,
                                    onChange: handleChange,
                                    onBlur: handleBlur,
                                }}
                                className={input.name === 'subject' ? "sm:col-span-2" : ""}
                            />)}
                            {/*  */}
                            <div className={`message sm:col-span-2`}>
                                {/* Label */}
                                <label htmlFor={'message'}>Message</label>
                                {/* Input */}
                                <textarea
                                    style={{
                                        resize: 'none'
                                    }}
                                    id='message'
                                    name='message'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder='Enter your Message'
                                    className='focus:outline-none p-2 rounded-md w-full bg-white-color-99 border border-white-color-95 mt-2 h-[160px]'
                                ></textarea>
                                {/* Error Message */}
                                <ErrorMessage component={'div'} name={'message'} className='text-red-500 mt-2' />
                            </div>
                        </div>
                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className='bg-orange-color-50 py-2 px-4 text-white rounded-md border border-orange-color-50 sm:hover:bg-white sm:hover:text-orange-color-50 transition text-center w-full'
                        >
                            Send Your Message
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default ContactForm;