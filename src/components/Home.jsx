import React from 'react'

export const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className='flex flex-col lg:flex-row justify-center items-center h-full w-full gap-2 lg:gap-4 py-8 lg:py-16 px-4 lg:px-28'>
                {/* Hero Photo */}
                <div className='lg:w-1/2 relative'>
                    <svg className='absolute -top-20 scale-125 -z-10 object-scale-down'
                        viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" fill="#ededed" r="80" />
                        <g>
                            <svg
                                className="blobs"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill="#ededed"
                                    d="M40.4,-70.6C50.5,-64,55.8,-49.6,62.2,-36.6C68.6,-23.5,76.2,-11.8,76.1,0C76.1,11.7,68.5,23.4,60.4,33.5C52.2,43.6,43.6,52.1,33.5,57.1C23.3,62,11.7,63.5,-1.9,66.8C-15.5,70.1,-31,75.3,-43,71.4C-55,67.5,-63.5,54.5,-69.3,41.1C-75.1,27.7,-78.1,13.9,-77.9,0.1C-77.7,-13.6,-74.2,-27.2,-67.8,-39.5C-61.3,-51.7,-51.9,-62.6,-40.1,-68.2C-28.3,-73.8,-14.2,-74.1,0.5,-74.9C15.1,-75.7,30.2,-77.1,40.4,-70.6Z"
                                    className="top"
                                />
                                <path
                                    fill="#ededed"
                                    d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
                                    className="middle"
                                />
                                <path
                                    fill="#ededed"
                                    d="M39.1,-66.7C53.2,-59.6,69,-54.3,75.5,-43.5C82,-32.6,79.1,-16.3,74.4,-2.7C69.8,10.9,63.3,21.9,56.1,31.4C48.9,40.9,40.9,49,31.5,57.9C22,66.8,11,76.4,-1.4,78.7C-13.7,81.1,-27.5,76.2,-40.7,69.6C-54,62.9,-66.8,54.4,-71.9,42.6C-77,30.7,-74.3,15.3,-74.5,-0.1C-74.7,-15.6,-77.8,-31.1,-71.7,-41.3C-65.7,-51.5,-50.4,-56.2,-37,-63.7C-23.5,-71.1,-11.7,-81.3,0.4,-81.9C12.5,-82.6,25,-73.7,39.1,-66.7Z"
                                    className="bottom"
                                />
                            </svg>
                        </g>
                    </svg>
                    <img className=' object-scale-down' src="hero.png" alt="hero" />
                </div>
                {/* Heading Text */}
                <div className='lg:w-1/2 relative'>
                    <img className='absolute -top-24 left-0 h-24 hidden lg:block object-scale-down' src="dots.png" alt="dots" />
                    <div className='font-extrabold text-[48px] text-[#2d2fbb] text-center lg:text-left'>
                        We are here to make you digital.
                    </div>
                </div>
            </div>
            {/* Four on the Floor Section */}
            <div className='bg-[#ea4d2d]/10 backdrop-blur-lg flex justify-center items-center flex-col lg:flex-row gap-6 px-8 py-8 '>
                <div className='h-60 w-80 p-2 bg-white rounded-lg text-center flex justify-center flex-col gap-2'>
                    <div className='flex justify-center '>
                        <img className='h-20 object-scale-down' src="usd.svg" alt="MoneyBack" />
                    </div>
                    <div className='font-bold text-[#2d2fbb] text-xl'>
                        Money-back Guarantee
                    </div>
                    <div>
                        You are in safe hands, We provide you 30 days money back guarantee.
                    </div>
                </div>
                <div className='h-60 w-80 p-2 bg-white rounded-lg text-center flex justify-center flex-col gap-2'>
                    <div className='flex justify-center '>
                        <img className='h-20 object-scale-down' src="db.svg" alt="MoneyBack" />
                    </div>
                    <div className='font-bold text-[#2d2fbb] text-xl'>
                        Big Data Transfer
                    </div>
                    <div>
                        Got huge data needs? No problem, we have solution to your needs.
                    </div>
                </div>
                <div className='h-60 w-80 p-2 bg-white rounded-lg text-center flex justify-center flex-col gap-2'>
                    <div className='flex justify-center '>
                        <img className='h-20 p-2 object-scale-down' src="rocket.svg" alt="MoneyBack" />
                    </div>
                    <div className='font-bold text-[#2d2fbb] text-xl'>
                        99.9% Server Uptime
                    </div>
                    <div>
                        Our servers have an up-time of 99.9%. Your worries about up-time are ours.
                    </div>
                </div>
                <div className='h-60 w-80 p-2 bg-white rounded-lg text-center flex justify-center flex-col gap-2'>
                    <div className='flex justify-center '>
                        <img className='h-20 p-2 object-scale-down' src="head.svg" alt="MoneyBack" />
                    </div>
                    <div className='font-bold text-[#2d2fbb] text-xl'>
                        Live 24/7 Support
                    </div>
                    <div>
                        Got some problem? Reach out to us with your issues and relax.
                    </div>
                </div>
            </div>
            {/* Choose Us Section */}
            <div className="my-12 mx-auto">
                <div className='text-4xl text-center text-[#2d2fbb] font-bold '>
                    Why Choose Us
                </div>
                <div className='text-center pt-6 w-3/4 mx-auto'>
                    We create Beautiful Websites, Professional & Unique Designs. ALL ABOUT TECHNICAL has designed and developed proprietary processes that allow it to service its clients fast, reliably, with better quality of design and programming and at lower costs to the client than any of our competitors could hope to accomplish.
                </div>
                <div className='text-center pt-6 w-3/4 mx-auto flex items-center flex-col lg:flex-row gap-4'>
                    <div className='flex justify-center flex-col'>
                        <div className=' h-60 w-80 p-2 bg-white border-2 border-black/20 shadow-xl shadow-black/30 rounded-lg text-center flex justify-center flex-col gap-2'>
                            <div className='flex justify-center '>
                                <img className='h-20 p-2 object-scale-down' src="head.svg" alt="MoneyBack" />
                            </div>
                            <div className='font-bold text-[#2d2fbb] text-xl'>
                                Proficient & Friendly
                            </div>
                            <div>
                                Our proficient and friendly team is there to assist you in your endeavors.
                            </div>
                        </div>
                        <div className='mt-6 h-60 w-80 p-2 bg-white border-2 border-black/20 shadow-xl shadow-black/30 rounded-lg text-center flex justify-center flex-col gap-2'>
                            <div className='flex justify-center '>
                                <img className='h-20 p-2 object-scale-down' src="head.svg" alt="MoneyBack" />
                            </div>
                            <div className='font-bold text-[#2d2fbb] text-xl'>
                                Extremely Fast
                            </div>
                            <div>
                                Are you time constrained? Get your project delivered in a time bound manner.
                            </div>
                        </div>
                    </div>
                    {/* / why photo */}
                    <div className='px-6 relative'>
                        <img className='shadow-2xl rounded-full hidden lg:block object-scale-down' src="why.png" alt="why" />
                        <svg className='absolute left-0 -top-3 scale-[1.3] -z-10 object-scale-down hidden lg:block'
                            viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" fill="#ededed" r="80" />
                            <g>
                                <svg
                                    className="blobs"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#ededed"
                                        d="M40.4,-70.6C50.5,-64,55.8,-49.6,62.2,-36.6C68.6,-23.5,76.2,-11.8,76.1,0C76.1,11.7,68.5,23.4,60.4,33.5C52.2,43.6,43.6,52.1,33.5,57.1C23.3,62,11.7,63.5,-1.9,66.8C-15.5,70.1,-31,75.3,-43,71.4C-55,67.5,-63.5,54.5,-69.3,41.1C-75.1,27.7,-78.1,13.9,-77.9,0.1C-77.7,-13.6,-74.2,-27.2,-67.8,-39.5C-61.3,-51.7,-51.9,-62.6,-40.1,-68.2C-28.3,-73.8,-14.2,-74.1,0.5,-74.9C15.1,-75.7,30.2,-77.1,40.4,-70.6Z"
                                        className="top"
                                    />
                                    <path
                                        fill="#ededed"
                                        d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
                                        className="middle"
                                    />
                                    <path
                                        fill="#ededed"
                                        d="M39.1,-66.7C53.2,-59.6,69,-54.3,75.5,-43.5C82,-32.6,79.1,-16.3,74.4,-2.7C69.8,10.9,63.3,21.9,56.1,31.4C48.9,40.9,40.9,49,31.5,57.9C22,66.8,11,76.4,-1.4,78.7C-13.7,81.1,-27.5,76.2,-40.7,69.6C-54,62.9,-66.8,54.4,-71.9,42.6C-77,30.7,-74.3,15.3,-74.5,-0.1C-74.7,-15.6,-77.8,-31.1,-71.7,-41.3C-65.7,-51.5,-50.4,-56.2,-37,-63.7C-23.5,-71.1,-11.7,-81.3,0.4,-81.9C12.5,-82.6,25,-73.7,39.1,-66.7Z"
                                        className="bottom"
                                    />
                                </svg>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <div className='h-60 w-80 p-2 bg-white border-2 border-black/20 shadow-xl shadow-black/30 rounded-lg text-center flex justify-center flex-col gap-2'>
                            <div className='flex justify-center '>
                                <img className='h-20 p-2 object-scale-down' src="head.svg" alt="MoneyBack" />
                            </div>
                            <div className='font-bold text-[#2d2fbb] text-xl'>
                                100% Safe & Security
                            </div>
                            <div>
                                Our team of developer is conscious of the need of safety and security of data.
                            </div>
                        </div>
                        <div className='mt-6 h-60 w-80 p-2 bg-white border-2 border-black/20 shadow-xl shadow-black/30 rounded-lg text-center flex justify-center flex-col gap-2'>
                            <div className='flex justify-center '>
                                <img className='h-20 p-2 object-scale-down' src="head.svg" alt="MoneyBack" />
                            </div>
                            <div className='font-bold text-[#2d2fbb] text-xl'>
                                Top-Rated
                            </div>
                            <div>
                                Get your project handled by well experienced team of developers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Features */}
            <div className='bg-[#f4f4f4]'>
                <h1 className='text-4xl text-center text-[#2d2fbb] font-bold pt-8'>
                    Our Features
                </h1>
                <p className='text-center pt-2 w-3/4 mx-auto'>
                    Our features include the following:
                </p>
                {/* 6 divs */}
                <div className='grid grid-cols-1 lg:grid-cols-3 text-center gap-8 px-2 lg:px-16'>
                    <div className='shadow-lg'>
                        <div className='ofb text-white rounded-t-lg p-2 flex justify-center items-center flex-col'>
                            <h1 className='pt-2 text-2xl font-semibold'>Zero Configuration</h1>
                            <p className='w-3/4 text-center pt-2'>Zero configuration is peace of mind. Let us handle all those details and relax.</p>
                        </div>
                        <div className='w-full bg-white rounded-b-lg flex justify-center'>
                            <img className='h-20 p-2' src="ben.png" alt="ben" />
                        </div>
                    </div>
                    <div className='shadow-lg'>
                        <div className='ofb text-white rounded-t-lg p-2 flex justify-center items-center flex-col'>
                            <h1 className='pt-2 text-2xl font-semibold'>Zero Configuration</h1>
                            <p className='w-3/4 text-center pt-2'>Zero configuration is peace of mind. Let us handle all those details and relax.</p>
                        </div>
                        <div className='w-full bg-white rounded-b-lg flex justify-center'>
                            <img className='h-20 p-2' src="ben.png" alt="ben" />
                        </div>
                    </div>
                    <div className='shadow-lg'>
                        <div className='ofb text-white rounded-t-lg p-2 flex justify-center items-center flex-col'>
                            <h1 className='pt-2 text-2xl font-semibold'>Zero Configuration</h1>
                            <p className='w-3/4 text-center pt-2'>Zero configuration is peace of mind. Let us handle all those details and relax.</p>
                        </div>
                        <div className='w-full bg-white rounded-b-lg flex justify-center'>
                            <img className='h-20 p-2' src="ben.png" alt="ben" />
                        </div>
                    </div>
                    <div className='shadow-lg'>
                        <div className='ofb text-white rounded-t-lg p-2 flex justify-center items-center flex-col'>
                            <h1 className='pt-2 text-2xl font-semibold'>Zero Configuration</h1>
                            <p className='w-3/4 text-center pt-2'>Zero configuration is peace of mind. Let us handle all those details and relax.</p>
                        </div>
                        <div className='w-full bg-white rounded-b-lg flex justify-center'>
                            <img className='h-20 p-2' src="ben.png" alt="ben" />
                        </div>
                    </div>
                    <div className='shadow-lg'>
                        <div className='ofb text-white rounded-t-lg p-2 flex justify-center items-center flex-col'>
                            <h1 className='pt-2 text-2xl font-semibold'>Zero Configuration</h1>
                            <p className='w-3/4 text-center pt-2'>Zero configuration is peace of mind. Let us handle all those details and relax.</p>
                        </div>
                        <div className='w-full bg-white rounded-b-lg flex justify-center'>
                            <img className='h-20 p-2' src="ben.png" alt="ben" />
                        </div>
                    </div>
                    <div className='shadow-lg'>
                        <div className='ofb text-white rounded-t-lg p-2 flex justify-center items-center flex-col'>
                            <h1 className='pt-2 text-2xl font-semibold'>Zero Configuration</h1>
                            <p className='w-3/4 text-center pt-2'>Zero configuration is peace of mind. Let us handle all those details and relax.</p>
                        </div>
                        <div className='w-full bg-white rounded-b-lg flex justify-center'>
                            <img className='h-20 p-2' src="ben.png" alt="ben" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
