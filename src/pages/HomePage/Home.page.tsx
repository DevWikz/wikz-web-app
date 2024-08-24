import React from 'react';

const HomePage: React.FC = () => {
    return (
        <>
            <div className='min-h-screen flex items-center'>
                <div className="container mx-auto px-6 flex flex-col md:flex-row mt-32 md:mt-16">
                    {/* Sol Taraf */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center space-y-8">
                        <h1 className="leading-[40px] md:leading-[64px] text-3xl md:text-[3rem] font-extrabold text-white text-center md:text-start ">
                            <p>
                            Are You Ready for Telegram's 
                            </p>
                            <p>
                            Ultimate Online Store?
                            </p>
                         
                        </h1>
                        <div className="bg-[#111e55] text-white p-5 md:p-10 rounded-3xl shadow-lg text-center md:text-start">
                            <p className="text-sm md:text-xl font-extralight">
                                Imagine snagging a piece of the <strong className="font-bold">next big thing</strong>—like getting in on Amazon
                                in its early days, but this time, it's free! Just launch the <strong className="font-bold">WikZ app</strong>, spin the
                                wheel, and claim your share of the future.
                            </p>
                            <p className="text-sm md:text-xl font-extralight mt-4">
                                It's your chance to win big and be part of <strong className="font-bold">Telegram's rising star</strong> in the
                                web3 world.
                            </p>

                            {/* Start WikZ Button */}
                            <div className="flex justify-center mt-6">
                                <button className="bg-[#5371ff] text-white font-extrabold text-sm md:text-2xl px-6 rounded-lg shadow-lg w-32 h-8 md:w-52 md:h-12">
                                    Start WikZ
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf */}
                    <div className="w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0">
                        <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/dev/v1.0.1/public/images/hero-img.png" alt="Mobile App" className="w-1/2 h-auto md:w-2/3" />
                    </div>
                </div>
            </div>

            <div className="px-5 py-5 md:px-24 md:py-12">
                {/* WikZ Swag Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white py-3 md:py-6">WikZ Swag</h1>
                    <h2 className="text-[20px] md:text-3xl font-bold mt-0 md:mt-1" style={{ color: '#5371ff' }}>
                        Your Hub for Exclusive Web3 Swag
                    </h2>
                    <div className="text-center mt-0 md:mt-0">
                        <p className="text-[16px] md:text-xl font-bold text-white">On the journey to becoming the premier swag store for the Web3 community</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Right Section with Image (now on the left) */}
                    <div className="w-full lg:w-[550px] flex justify-center items-center lg:mr-4 mt-0 mb-12 md:md-0 md:mt-12  lg:mt-0">
                        <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/dev/v1.0.1/public/images/swag-img.png" alt="Mobile App" className="w-full h-auto" />
                    </div>

                    {/* Left Section with Cards (now on the right) */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                            {/* 1.Kart */}
                            <div className="bg-[#1a2024] text-white p-2 rounded-[1rem] shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-sm md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Shop Unique Swag</h3>
                                    <p className='text-[10px] md:text-[15px]'>Exclusive items directly from top crypto brands' stores, hosted on WikZ Swag.</p>
                                </div>
                            </div>
                            {/* 2.Kart */}
                            <div className="bg-[#1a2024] text-white p-2 rounded-[1rem] shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-sm md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Worldwide Shipping</h3>
                                    <p className='text-[10px] md:text-[15px]'>Global delivery from 12 <br /> fulfillment centers.</p>
                                </div>
                            </div>
                            {/* 3.Kart */}
                            <div className="bg-[#1a2024] text-white p-2 rounded-[1rem] shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-sm md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Shop-to-Earn</h3>
                                    <p className='text-[10px] md:text-[15px]'>Earn valuable rewards with <br /> every purchase you make.</p>
                                </div>
                            </div>
                            {/* 4.Kart */}
                            <div className="bg-[#1a2024] text-white p-2 rounded-[1rem] shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-sm md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Flexible Payments</h3>
                                    <p className='text-[10px] md:text-[15px]'>Pay easily with major<br /> cryptocurrencies or traditional methods.</p>
                                </div>
                            </div>
                        </div>

                        {/* Personalized Shopping Section */}
                        <div className="w-full mt-4">
                            <div className="bg-[#1a2024] text-white p-4 rounded-[1rem] shadow-lg justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-sm md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Personalized Shopping</h3>
                                    <p className='text-[10px] md:text-[15px]'>Get personalized recommendations and <br />dedicated support directly through Telegram Bot.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="px-5 py-5 md:px-24 md:py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white py-3 md:py-6">WikZ Digital</h1>
                    <h2 className="text-[20px] md:text-3xl font-bold mt-0 md:mt-2" style={{ color: '#5371ff' }}>
                        WikZ Digital brings key services to Telegram app
                    </h2>
                    <div className="text-center mt-0 md:mt-0">
                        <p className="text-[16px] md:text-xl font-bold text-white">WikZ Digital simplifies your digital life, keeping everything you need right at your fingertips within Telegram</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Right Section with Image on Mobile */}
                    <div className="w-full lg:w-2/4 flex justify-center items-center mt-0 md:mt-12 mb-12 md:mb-0 lg:mt-0 order-1 lg:order-2">
                        <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/dev/v1.0.1/public/images/digital-img.png" alt="Mobile App" className="w-full h-auto" />
                    </div>

                    {/* Left Section with Cards */}
                    <div className="w-full lg:w-1/2 space-y-8 p-0 md:p-10 order-2 lg:order-1">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col justify-center items-center bg-[#1a2024] text-white p-2 md:p-4 rounded-[1rem] shadow-lg text-center">
                                <h3 className="text-xs md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Gift Cards</h3>
                                <p className='text-[10px] md:text-[15px]'>Buy and send gift<br /> cards instantly.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-[#1a2024] text-white p-2 md:p-4 rounded-[1rem] shadow-lg text-center">
                                <h3 className="text-xs md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Bill Payments</h3>
                                <p className='text-[10px] md:text-[15px]'>Pay bills securely<br /> using crypto.</p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-[#1a2024] text-white p-2 md:p-4 rounded-[1rem] shadow-lg text-center">
                                <h3 className="text-xs md:text-xl font-bold mb-2" style={{ color: '#5371ff' }}>E-SIM</h3>
                                <p className='text-[10px] md:text-[15px]'>Activate and<br /> manage E-SIMs with ease.</p>
                            </div>
                        </div>

                        {/* Why Choose WikZ Digital Section */}
                        <div className="mt-12">
                            <h2 className="text-1xl md:text-3xl font-bold mb-2 mt-0 md:mt-2" style={{ color: '#5371ff' }}>
                                Why Choose WikZ Digital?
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#1a2024] text-white p-4 md:p-6 rounded-[1rem] shadow-lg text-center">
                                    <p className='text-[10px] md:text-[15px]'>Handle all digital<br /> needs without leaving<br /> Telegram app.</p>
                                </div>
                                <div className="bg-[#1a2024] text-white p-4 md:p-6 rounded-[1rem] shadow-lg text-center">
                                    <p className='text-[10px] md:text-[15px]'>Fast, secure transactions<br /> powered by TON<br /> blockchain.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
