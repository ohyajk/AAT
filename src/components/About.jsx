import React from 'react'

export const About = () => {
    return (
        <>
            {/* About Hero */}
            <div className='flex justify-center align-middle my-12 py-8 px-[10%] bg-[#f4f4f4]'>
                <div className='w-[70%] flex flex-col justify-center px-4'>
                    <h1 class="text-4xl py-2 text-[#2d2fbb] font-bold ">About Us</h1>
                    <p>All About Technical (AAT) is a IT Services Provider – Expert in Website, Software and Mobile App development. We also provide digital marketing, domain name registration, web hosting and SEO. If you are looking for a creative and professional website designer then AAT is the final place for your website needs. We have a goal of giving each website a unique meaning and a vision of professionalism.You may contact us here.</p>
                </div>
                <div className='w-[30%] '>
                    <img src=" round-logo.png" alt="rl" />
                </div>
            </div>

            {/* About CEO */}
            <div className='flex justify-center align-middle py-8 px-[10%] '>
                <div className='w-[40%] border-4 border-[#d3591c]'>
                    <img className='p-4' src="shubham.jpg" alt="rl" />
                </div>
                <div className='w-[60%] flex flex-col justify-center px-4'>
                    <h1 class="text-4xl py-2 text-[#2d2fbb] font-bold ">Shubham Sokhal (CEO)</h1>
                    <p>Hello there, I'm Shubham Sokhal. I'm a resident of Abohar, Punjab. I'm a business oriented and highly ambitious person. I started working as a freelancer when I was 12 years old. I started my own company named All About Technical at the age of 15 years. I was awarded as the youngest entrepreneur of the year, at the age of 16. I've a decent number of impressed and contented clients. I have my own team of working professionals. My moto is Taking everyone forward, with IT and I work diligently to strive towards achieving my goals.</p>
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
        </>
    )
}
