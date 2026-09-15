import React from "react";
import { FaFacebook, FaGithub, FaGitlab, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { SiCodeforces, SiGmail, SiHuggingface, SiLeetcode } from "react-icons/si";

export default function Footer() {
    return (
        <div className="w-full h-25 bg-slate-100 dark:bg-black border-t border-[#80db66] text-slate-800 dark:text-white flex flex-col justify-center items-center">
            <div className="flex gap-2 text-lg lg:gap-6 lg:text-3xl">

                <button className="footer-icon">
                    <a href="">
                        <FaGithub className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <FaLinkedin className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <FaInstagram className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <FaTwitter className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <FaGitlab className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <FaFacebook className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <FaWhatsapp className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <MdCall className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <SiHuggingface className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <SiLeetcode className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <SiCodeforces className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>
                <button className="footer-icon">
                    <a href="">
                        <SiGmail className="hover:text-[#80db66] cursor-pointer" />
                    </a>
                </button>

            </div>
            <div className="text-[8px]  lg:text-[16px] text-slate-500 dark:text-white/75 mt-2">
                <p>&copy;2026 BYIMBO Ghislain. Coding For World</p>
            </div>
        </div>
    )
}