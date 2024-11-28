import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';

function NavbarAuthLinks() {

    const { user } = useUser();

    return (
        <div className='auth-links ms-auto'>
            {
                user ? (
                    <div className='flex items-center gap-2'>
                        <UserButton />
                        <span className='max-sm:hidden'>{user.fullName}</span>
                    </div>
                ) : (
                    <>
                        <SignUpButton
                            mode='modal'
                            className='py-2 px-4'
                        />
                        <SignInButton
                            mode='modal'
                            className='bg-orange-color-50 text-white py-2 px-4 rounded-md'
                        />
                    </>
                )
            }
        </div>
    )
}

export default NavbarAuthLinks;