import { FaTelegramPlane, FaTimes } from 'react-icons/fa';

const AppNavbarComp = () => {
    return (
        <nav className="fixed top-0 w-full z-10 mt-10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center bg-[#2354e6] shadow-lg rounded-3xl">
                {/* Logo ve Title */}
                <div className="flex items-center space-x-4">
                    <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/dev/v1.0.1/public/images/wikz-circle-dark-logo.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-4xl text-white font-bold">WikZ</span>
                </div>

                {/* Button Section */}
                <div className="flex space-x-4">
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2">
                        <FaTelegramPlane className="w-5 h-5" />
                        <span>Telegram</span>
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2">
                        <FaTimes className="w-5 h-5" />
                        <span>Twitter</span>
                    </button>
                    <button className="bg-black text-white px-4 py-2 rounded-full">
                        Docs
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbarComp