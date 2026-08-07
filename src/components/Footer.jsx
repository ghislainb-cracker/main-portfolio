import React from "react";
import { FaFacebook, FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { SiCodeforces, SiGmail, SiHuggingface, SiLeetcode } from "react-icons/si";

export default function Footer() {
    return (
        <div className="w-full h-25 bg-black border-t border-[#80db66] text-white flex flex-col justify-center items-center">
            <div className="flex gap-2 text-lg lg:gap-6 lg:text-3xl">

                <button>
                    <FaGithub className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <FaLinkedin className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <FaInstagram className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <FaTwitter className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <FaGitlab className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <FaFacebook className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <FaWhatsapp className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <MdCall className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <SiHuggingface className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <SiLeetcode className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <SiCodeforces className="hover:text-[#80db66] cursor-pointer" />
                </button>
                <button>
                    <SiGmail className="hover:text-[#80db66] cursor-pointer" />
                </button>

            </div>
            <div className="text-[8px]  lg:text-[16px] text-white/75 mt-2">
                <p>&copy;2026 BYIMBO Ghislain. Coding For World</p>
            </div>
        </div>
    )
}