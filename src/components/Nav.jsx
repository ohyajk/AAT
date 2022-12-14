import React from 'react'

import { Link } from "react-router-dom"

export const Nav = () => {



    return (
        <>
            {/* PC NAV */}
            <div className='hidden lg:flex justify-center w-full font-medium'>
                <div className='h-20 w-3/4 mt-2 rounded-full flex justify-between items-center px-10 text-center border-[1px] border-black/20 shadow-black/25 shadow-lg nav'>
                    <img className='h-14 object-scale-down' src="logo.png" alt="logo" />
                    <div className='flex gap-8 links'>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to="/">PROJECTS</Link>
                    <Link to="/">CONTACT</Link>
                    </div>
                </div>
            </div>
            {/* MOBILE NAV */}
            <div className='lg:hidden flex justify-center w-full font-medium'>
                <div className='h-20 w-11/12 mt-2 rounded-full flex justify-between items-center px-10 text-center border-[1px] border-black/20 shadow-black/25 shadow-lg nav'>
                    <img className='h-14 object-scale-down' src="logo.png" alt="logo" />
                    <div>
                        Hello
                    </div>
                </div>
            </div>
        </>
    )
}
