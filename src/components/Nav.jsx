import React from 'react'

export const Nav = () => {
    return (
        <>
            <div className='relative flex justify-center w-full'>
                <div className='relative nav h-20 w-3/4 mt-4 rounded-full flex justify-between items-center px-10 text-center'>
                    <img className=' h-14 object-cover' src="logo.png" alt="logo" />
                    <div className='relative flex gap-8 links'>
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
