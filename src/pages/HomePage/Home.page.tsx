import React from 'react';

const HomePage: React.FC = () => {
    return (
        <>
            <div className="min-h-screen flex items-center">
                <div className="container mx-auto px-6 flex flex-col md:flex-row">
                    {/* Sol Taraf */}
                    <div className="w-full md:w-2/3 flex flex-col justify-center space-y-8">
                        <div className="bg-[#2354e6] text-white p-6 rounded-lg shadow-lg">
                            <p className="text-lg font-light">
                                Imagine snagging a piece of the <strong className="font-bold">next big thing</strong>—like getting in on Amazon
                                in its early days, but this time, it's free! Just launch the <strong className="font-bold">WikZ app</strong>, spin the
                                wheel, and claim your share of the future.
                            </p>
                            <p className="text-lg font-light mt-4">
                                It's your chance to win big and be part of <strong className="font-bold">Telegram's rising star</strong> in the
                                web3 world.
                            </p>

                            {/* Start WikZ Button */}
                            <div className="flex justify-center mt-6">
                                <button className="bg-[#5371ff] text-white font-bold text-lg px-6 py-3 rounded-lg shadow-lg">
                                    Start WikZ
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf */}
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        <img src="images/hero-img.png" alt="Mobile App" className="w-1/2 h-auto md:w-2/3" />
                    </div>
                </div>



            </div>

            <div className="w-full px-6 py-12">
                {/* WikZ Swag Section */}
                <div className="text-center mb-12">
                    <h1 className="text-7xl font-bold text-white">WikZ Swag</h1>
                    <h2 className="text-4xl font-bold mt-2" style={{ color: '#5371ff' }}>

                        Your Hub for Exclusive Web3 Swag
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Right Section with Image (now on the left) */}
                    <div className="w-full lg:w-2/4 flex justify-center items-center lg:mr-8 mt-12 lg:mt-0">
                        <img src="images/swag-img.png" alt="Mobile App" className="w-full h-auto" />
                    </div>

                    {/* Left Section with Cards (now on the right) */}
                    <div className="w-full lg:w-1/2 space-y-8 lg:ml-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Shop Unique Swag</h3>
                                    <p>Exclusive items directly from top crypto brands' stores, hosted on WikZ Swag.</p>
                                </div>
                            </div>
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Worldwide Shipping</h3>
                                    <p>Global delivery from 12 fulfillment centers.</p>
                                </div>
                            </div>
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Shop-to-Earn</h3>
                                    <p>Earn valuable rewards with every purchase you make.</p>
                                </div>
                            </div>
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg flex justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Flexible Payments</h3>
                                    <p>Pay easily with major cryptocurrencies or traditional methods.</p>
                                </div>
                            </div>
                        </div>

                        {/* Personalized Shopping Section */}
                        <div className="w-full mt-8">
                            <div className="bg-[#1a2024] text-white p-8 rounded-lg shadow-lg justify-center items-center">
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#5371ff' }}>Personalized Shopping</h3>
                                    <p>Get personalized recommendations and dedicated support directly through Telegram Bot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="text-center mt-12">
                    <p className="text-xl font-bold text-white">On the journey to becoming the premier swag store for the Web3 community</p>
                </div>
            </div>

            <div className="w-full px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-7xl font-bold text-white">WikZ Digital</h1>
                    <h2 className="text-4xl font-bold mt-2" style={{ color: '#5371ff' }}>
                        WikZ Digital brings key services to Telegram app
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Left Section with Cards */}
                    <div className="w-full lg:w-1/2 space-y-8 p-10">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Gift Cards</h3>
                                <p>Buy and send gift cards instantly.</p>
                            </div>
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Bill Payments</h3>
                                <p>Pay bills securely using crypto.</p>
                            </div>
                            <div className="bg-[#1a2024] text-white p-4 rounded-lg shadow-lg text-center">
                                <h3 className="text-xl font-bold mb-2">E-SIM Solutions</h3>
                                <p>Activate and manage E-SIMs with ease.</p>
                            </div>
                        </div>

                        {/* Why Choose WikZ Digital Section */}
                        <div className="mt-12">
                            <h2 className="text-4xl font-bold mb-8" style={{ color: '#5371ff' }}>
                                Why Choose WikZ Digital?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="bg-[#1a2024] text-white p-8 rounded-lg shadow-lg text-center">
                                    <p>Handle all digital needs without leaving Telegram app.</p>
                                </div>
                                <div className="bg-[#1a2024] text-white p-8 rounded-lg shadow-lg text-center">
                                    <p>Fast, secure transactions powered by TON blockchain.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section with Image */}
                    <div className="w-full lg:w-2/4 flex justify-center items-center mt-12 lg:mt-0">
                        <img src="images/swag-img.png" alt="Mobile App" className="w-full h-auto" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;
