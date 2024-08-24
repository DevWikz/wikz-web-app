import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

const AppNavbarComp = () => {
    return (
        <nav className="fixed top-0 w-full z-10 mt-0 md:mt-10">
            <div className="container w-[90%] mx-auto px-4 md:px-6 py-4 flex justify-between items-center bg-[#2354e6] shadow-lg rounded-b-lg md:rounded-2xl">
                {/* Logo ve Title */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/dev/v1.0.1/public/images/wikz-circle-dark-logo.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
                    <span className="text-3xl md:text-5xl  text-white font-bold">WikZ</span>
                </div>

                {/* Button Section */}
                <div className="flex space-x-2 md:space-x-4">
                    <button className="bg-black text-white p-[5px] md:px-4 md:py-2 rounded-xl flex items-center space-x-2">
                        <FaTelegramPlane className="w-[1.5rem] h-[1.5rem] md:w-5 md:h-5" />
                    </button>
                    <button className="bg-black text-white p-[5px] md:px-4 md:py-2 rounded-xl flex items-center space-x-2">
                        <RiTwitterXFill className="w-[1.5rem] h-[1.5rem] md:w-5 md:h-5" />
                    </button>
                    <button className="flex row bg-black text-white font-extrabold p-[5px] md:px-4 md:py-2 rounded-xl items-center gap-2">
                        <CgFileDocument className="w-[1.5rem] h-[1.5rem] md:w-5 md:h-5" />
                        DOCS
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbarComp