import React from 'react'

export const Home = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-2 lg:gap-4 py-16 px-4 lg:px-28'>
                <div className='w-1/2'>
                    <img className=' object-scale-down' src="hero.png" alt="hero" />
                </div>
                <div className='w-1/2'>
                    <h1 className='font-extrabold text-[48px] text-[#2d2fbb] text-center lg:text-left'>
                        We are here to make you digital.
                    </h1>
                </div>
            </div>
        </>
    )
}
