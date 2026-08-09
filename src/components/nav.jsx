import { useState } from "react";
import { BiSolidMoon } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

export const Nav = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { title: "Home", href: "#home" },
        { title: "About Me", href: "#about" },
        { title: "Services", href: "#services" },
        { title: "Resume", href: "#resume" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <div className="flex justify-center items-center px-4">
            <nav className="h-20 bg-[#4d77ff] flex justify-between items-center px-5 w-full max-w-6xl rounded-lg relative">


                <img
                    src="/ok.png"
                    alt="Logo"
                    className="h-19 w-19 lg:h-38 lg:w-38 object-contain"
                />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                    <ul className="flex gap-6 text-xl text-white mr-8">
                        {links.map((link) => (
                            <li key={link.title} className="font-medium">
                                <a
                                    href={link.href}
                                    className="hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button className="h-8 w-8 border border-white flex justify-center items-center rounded-full bg-white cursor-pointer">
                        <BiSolidMoon />
                    </button>
                </div>


                {/* Mobile Burger */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white text-3xl"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>


                {/* Mobile Dropdown */}
                {open && (
                    <div className="absolute top-20 left-0 w-full bg-[#4d77ff] rounded-lg shadow-lg md:hidden z-50">
                        <ul className="flex flex-col items-start gap-5 py-6 px-4 text-xl text-white">
                            {links.map((link) => (
                                <li key={link.title} className="w-full">
                                    <a
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className="block w-full hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer font-medium"
                                    >
                                        {link.title}
                                    </a>
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