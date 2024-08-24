import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";

const AppNavbarComp = () => {
    return (
        <nav className="fixed top-0 w-full z-10 mt-0 md:mt-0">
            <div className="container w-[90%] mx-auto px-4 md:px-6 py-4 flex justify-between items-center bg-[#2354e6] shadow-lg rounded-b-3xl md:rounded-b-3xl">
                {/* Logo ve Title */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    <img src="https://raw.githubusercontent.com/DevWikz/wikz-web-app/a0742d636453e336cd689cbf7f47db407ad89ac9/public/images/wikz_logo.svg" alt="Logo" className="w-30 h-10 md:w-32 md:h-10" />
                </div>

                {/* Button Section */}
                <div className="flex space-x-2 md:space-x-4">
                    <button 
                    className="bg-black text-white p-[5px] md:px-3 md:py-3 rounded-xl flex items-center space-x-2"
                    onClick={() => window.open("https://t.me/WikZCrypto", "_blank")}
                    >
                        <FaTelegramPlane className="w-[1.5rem] h-[1.5rem] md:w-5 md:h-5" />
                    </button>
                    <button 
                    className="bg-black text-white p-[5px] md:px-3 md:py-2 rounded-xl flex items-center space-x-2"
                    onClick={() => window.open("https://x.com/WikZCrypto", "_blank")}
                    >
                        <RiTwitterXFill className="w-[1.5rem] h-[1.5rem] md:w-5 md:h-5" />
                    </button>
                    <button 
                    className="flex row bg-black text-white font-extrabold p-[5px] md:px-3 md:py-3 rounded-xl items-center gap-2"
                    onClick={() => window.open("https://wikz.gitbook.io/", "_blank")}
                    >
                        <CgFileDocument className="w-[1.5rem] h-[1.5rem] md:w-5 md:h-5" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbarComp