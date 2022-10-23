import React from 'react'

export const Nav = () => {
    return (
        <>
            <div className='flex justify-center w-full font-medium'>
                <div className='h-20 w-3/4 mt-2 rounded-full flex justify-between items-center px-10 text-center border-2 border-black/20 shadow-black/25 shadow-lg nav'>
                    <img className='h-14 object-cover' src="logo.png" alt="logo" />
                    <div className='flex gap-8 links'>
                        <a>HOME</a>
                        <a>ABOUT</a>
                        <a>SERVICES</a>
                        <a>PROJECTS</a>
                        <a>CONTACT</a>
                    </div>
                </div>
            </div>
        </>
    )
}
