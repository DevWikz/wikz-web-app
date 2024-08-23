import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

const AppNavbarComp = () => {
    return (
        <nav className="fixed top-0 w-full z-10 mt-0 md:mt-10">
            <div className="container mx-auto px-1 md:px-6 py-4 flex justify-between items-center bg-[#111e55] shadow-lg rounded-none md:rounded-2xl">
                {/* Logo ve Title */}
                <div className="flex items-center space-x-4">
                    <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/dev/v1.0.1/public/images/wikz-circle-dark-logo.png" alt="Logo" className="w-10 h-10" />
                    <span className="text-4xl md:text-5xl  text-white font-bold">WikZ</span>
                </div>

                {/* Button Section */}
                <div className="flex space-x-4">
                    <button className="bg-black text-white px-3 py-2 rounded-xl flex items-center space-x-2">
                        <FaTelegramPlane className="w-5 h-5" />
                    </button>
                    <button className="bg-black text-white px-3 py-2 rounded-xl flex items-center space-x-2">
                        <RiTwitterXFill className="w-5 h-5" />
                    </button>
                    <button className="flex row bg-black text-white font-extrabold px-4 py-2 rounded-xl items-center gap-2">
                        <CgFileDocument className="w-5 h-5" />
                        DOCS
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbarComp