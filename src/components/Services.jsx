import React from 'react'

export const Services = () => {
    return (
        <>
            {/* Services Cards */}
            <div className="">
                <div className="grid grid-cols-3 my-12 gap-4 px-[10%]">
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className=' absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                            <svg
                                className='p-4'
                                xmlns="http://www.w3.org/2000/svg"
                                ariaHidden="true"
                                data-icon="desktop"
                                data-prefix="fas"
                                viewBox="0 0 576 512"
                            >
                                <path
                                    fill="#013668"
                                    d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"
                                ></path>
                            </svg>
                        </div>
                        <h1 class="mt-6  font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                            <svg
                                className='p-4'
                                xmlns="http://www.w3.org/2000/svg"
                                ariaHidden="true"
                                data-icon="pencil-alt"
                                data-prefix="fas"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#013668"
                                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                ></path>
                            </svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                ariaHidden="true"
                                className="p-4"
                                data-icon="sms"
                                data-prefix="fas"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="#013668"
                                    d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"
                                ></path>
                            </svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                ariaHidden="true"
                                className="p-4"
                                data-icon="bullhorn"
                                data-prefix="fas"
                                viewBox="0 0 576 512"
                            >
                                <path
                                    fill="#013668"
                                    d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0019.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"
                                ></path>
                            </svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                ariaHidden="true"
                                className="p-6"
                                data-icon="mobile-alt"
                                data-prefix="fas"
                                viewBox="0 0 320 512"
                            >
                                <path
                                    fill="#013668"
                                    d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                                ></path>
                            </svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                        <svg className="p-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="#013668" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                        <svg className="p-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="wordpress" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#013668" d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8.9 0 1.8.1 2.8.2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7.3 13.7.3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"></path></svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>
                    <div className="mt-8 relative flex flex-col justify-center align-middle text-center p-4 border-2 border-black/10 shadow-lg rounded-lg">
                        <div className='absolute bg-white right-0 left-0 -top-[20%] h-20 w-20 mx-auto border-2 rounded-full text-center shadow-lg'>
                        <svg className="p-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="#013668" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        </div>
                        <h1 class="mt-6 mb-2 font-bold text-[#2d2fbb] text-xl">Extremely Fast</h1>
                        <p className="">Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience</p>
                    </div>



                </div>



            </div>
        </>
    )
}
