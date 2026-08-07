import { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

export const Nav = () => {
    const [open, setOpen] = useState(false);

    const links = ["Home", "About Me", "Projects", "Skills", "Contact"];

    return (
        <div className="flex justify-center items-center px-4">
            <nav className="h-20 bg-[#4d77ff] flex justify-between items-center px-5 w-full max-w-6xl rounded-lg relative">

                {/* Logo */}
                <img 
                    src="/ok.png" 
                    alt="Logo" 
                    className="h-16 w-16 object-contain"
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <ul className="flex gap-6 text-xl text-white mr-8">
                        {links.map((link) => (
                            <li 
                                key={link}
                                className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>

                    <button className="h-8 w-8 border border-white flex justify-center items-center rounded-full bg-white cursor-pointer">
                        <BiSolidMoon />
                    </button>
                </div>


                {/* Mobile Burger */}
                <div className="md:hidden flex items-start justify-end z-50 ">
                    <button 
                        onClick={() => setOpen(!open)}
                        className="text-white text-3xl"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>


                {/* Mobile Dropdown */}
                {open && (
                    <div className="absolute top-20 left-0 w-full bg-[#4d77ff] rounded-lg shadow-lg md:hidden">
                        <ul className="flex flex-col items-center gap-5 py-6 text-xl text-white">
                            {links.map((link) => (
                                <li
                                    key={link}
                                    onClick={() => setOpen(false)}
                                    className="hover:text-green-500 transition-all duration-300 cursor-pointer font-medium"
                                >
                                    {link}
                                </li>
                            ))}

                            <button className="h-8 w-8 border border-white flex justify-center items-center rounded-full bg-white cursor-pointer">
                                <BiSolidMoon />
                            </button>
                        </ul>
                    </div>
                )}

            </nav>
        </div>
    );
};