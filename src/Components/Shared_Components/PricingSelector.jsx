import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handlePricingSelected } from '../../Store/slices/appSlice';

function PricingSelector() {

    const dispatch = useDispatch();

    const { pricingSelected } = useSelector(state => state.app);

    const handleClick = (plan) => {
        if (plan !== pricingSelected) dispatch(handlePricingSelected(plan));
    }

    return (
        <div className='pricing-selector flex items-center gap-2 bg-white p-2 rounded-md w-fit mx-auto'>
            {/* Monthly */}
            <button
                type='button'
                aria-label='Pricing Toggler'
                title='Monthly Pricing'
                onClick={() => handleClick('monthly')}
                className={`py-2 px-4 rounded-md ${pricingSelected === 'monthly' && "bg-orange-color-50 text-white"}`}
            >
                Monthly
            </button>
            {/* Yearly */}
            <button
                type='button'
                aria-label='Pricing Toggler'
                title='Yearly Pricing'
                onClick={() => handleClick('yearly')}
                className={`py-2 px-4 rounded-md ${pricingSelected === 'yearly' && "bg-orange-color-50 text-white"}`}
            >
                Yearly
            </button>
        </div>
    )
}

export default PricingSelector;