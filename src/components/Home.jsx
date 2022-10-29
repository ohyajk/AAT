import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
            <div className='bg-[#f4f4f4] pb-8'>
                <h1 className='text-4xl text-center text-[#2d2fbb] font-bold pt-8'>
                    Our Features
                </h1>
                <p className='text-center pt-2 pb-4 w-3/4 mx-auto'>
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
            {/* Services */}
            <div className='bg-white flex flex-col justify-center items-center pb-8'>
                <h1 className='text-4xl text-center text-[#2d2fbb] font-bold pt-8'>
                    Our Services
                </h1>
                {/* 4 Services */}
                <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-6 px-2 lg:px-16 py-8 w-[92%] lg:w-[60%]'>
                    <div className='flex justify-start bg-[#ea4d2d] hover:bg-[#2d2fbb] rounded-l-full rounded-r-full '>
                        <div className='bg-white p-2 rounded-full border-2 border-[#2d2fbb]'>
                            <svg class="h-8 w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="desktop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="#2d2fbb" d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></svg>
                        </div>
                        <div className='flex justify-center text-center items-center text-white w-full'>
                            <h1>Web Designing & Development</h1>
                        </div>
                    </div>
                    <div className='flex justify-start bg-[#ea4d2d] hover:bg-[#2d2fbb] rounded-l-full rounded-r-full '>
                        <div className='bg-white p-2 rounded-full border-2 border-[#2d2fbb]'>
                            <svg class="h-8 w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-dots" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#2d2fbb" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                        </div>
                        <div className='flex justify-center text-center items-center text-white w-full'>
                            <h1>Bulk SMS Services</h1>
                        </div>
                    </div>
                    <div className='flex justify-start bg-[#ea4d2d] hover:bg-[#2d2fbb] rounded-l-full rounded-r-full '>
                        <div className='bg-white p-2 rounded-full border-2 border-[#2d2fbb]'>
                            <svg class="h-8 w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="#2d2fbb" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                        </div>
                        <div className='flex justify-center text-center items-center text-white w-full'>
                            <h1>Android & iOS Apps Development</h1>
                        </div>
                    </div>
                    <div className='flex justify-start bg-[#ea4d2d] hover:bg-[#2d2fbb] rounded-l-full rounded-r-full w-full'>
                        <div className='bg-white p-2 rounded-full border-2 border-[#2d2fbb]'>
                            <svg class="h-8 w-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullhorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="#2d2fbb" d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>
                        </div>
                        <div className='flex justify-center text-center items-center text-white w-full'>
                            <h1>Digital Marketing</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-2 '>
                    <a className='px-4 py-2 bg-[#ea4d2d] text-white hover:bg-[#2d2fbb]' href="#">
                        View All Services
                    </a>
                </div>
            </div>
            {/* Testimonies */}
            <div className='bg-[#2d2fbb] flex flex-col justify-center items-center pb-8'>
                <h1 className='text-4xl text-center text-white font-bold pb-8 pt-8'>
                    What Users Saying
                </h1>
                {/* 4 Services */}
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div className='text-white flex justify-center'>
                        <div className="w-1/2">
                            <p className='bg-[#001b34] p-8'>
                            <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="quote-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                            Really satisfied with service. No need to tell them what to change they update everything time to time.
                                <svg class="h-4" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="quote-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                            </p>
                            <img className=' h-20 w-20 object-scale-down mt-2' src="honda.png" alt="honda" />
                            <h3 className='pt-2 text-2xl'>Modern Honda</h3>
                            <h4 className='mb-8'>Abohar</h4>
                        </div>
                    </div>
                   


                </Carousel>

            </div>
        </>
    )
}
