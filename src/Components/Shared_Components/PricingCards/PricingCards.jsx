import React from 'react';
import IconWrapper from '../IconWrapper';
import { useSelector } from 'react-redux';

const PlanCard = ({ planData }) => {

    const { pricingSelected } = useSelector(state => state.app);

    const {
        typePlan,
        features,
        price: {
            monthly,
            yearly,
        }
    } = planData;

    return (
        <div className='plan-card bg-white-color-99 rounded-md p-3 shadow-md space-y-5'>
            {/* Type Plan */}
            <div className='p-2 rounded-md bg-orange-color-97 border border-orange-color-90 font-medium text-center'>{typePlan} Plan</div>
            {/* Price Plan */}
            <div className='price-plan flex items-end justify-center gap-1 text-grey-color-15'>
                <h1 className='sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>${(pricingSelected === 'monthly' ? monthly : yearly)}</h1>
                <span>{"/" + (pricingSelected === 'monthly' ? "month" : "year")}</span>
            </div>
            {/* Features */}
            <div className='features p-3 rounded-md border border-white-color-95 bg-white'>
                <h3 className='mb-3 font-medium text-center text-grey-color-15'>Available Features</h3>
                <ul className='space-y-2'>
                    {features.map((feature, index) => <li key={index} className='flex items-center gap-2 border border-white-color-95 p-3 rounded-md text-grey-color-30'>
                        {/* Icon */}
                        <IconWrapper
                            bgColor={'bg-orange-color-95'}
                            fontAwesomeIconClass={`fa-solid fa-${feature.allowed ? 'check' : 'xmark'}`}
                        />
                        <span className='flex-1'>{feature.text}</span>
                    </li>)}
                </ul>
            </div>
        </div>
    )
};

function PricingCards() {
    return (
        <div className='pricing-cards p-3 sm:p-5 md:p-7 lg:p-10 rounded-xl bg-white shadow-md grid md:grid-cols-2 gap-5'>
            {/* Pricing Card One */}
            <PlanCard
                planData={{
                    typePlan: "Free",
                    price: {
                        monthly: 0,
                        yearly: 0,
                    },
                    features: [
                        {
                            text: "Access to selected free courses.",
                            allowed: true
                        },
                        {
                            text: "Limited course materials and resources.",
                            allowed: true
                        },
                        {
                            text: "Basic community support.",
                            allowed: true
                        },
                        {
                            text: "No certification upon completion.",
                            allowed: true
                        },
                        {
                            text: "Ad-supported platform.",
                            allowed: true
                        },
                        {
                            text: "Access to exclusive Pro Plan community forums.",
                            allowed: false
                        },
                        {
                            text: "Early access to new courses and updates.",
                            allowed: false
                        },
                    ]
                }}
            />
            {/* Pricing Card Tow */}
            <PlanCard
                planData={{
                    typePlan: "Pro",
                    price: {
                        monthly: 79,
                        yearly: 1179,
                    },
                    features: [
                        {
                            text: "Access to selected free courses.",
                            allowed: true
                        },
                        {
                            text: "Limited course materials and resources.",
                            allowed: true
                        },
                        {
                            text: "Basic community support.",
                            allowed: true
                        },
                        {
                            text: "No certification upon completion.",
                            allowed: true
                        },
                        {
                            text: "Ad-supported platform.",
                            allowed: true
                        },
                        {
                            text: "Access to exclusive Pro Plan community forums.",
                            allowed: true
                        },
                        {
                            text: "Early access to new courses and updates.",
                            allowed: true
                        },
                    ]
                }}
            />
        </div>
    )
}

export default PricingCards;