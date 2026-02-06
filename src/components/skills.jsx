import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaFigma } from "react-icons/fa";
import { SiThreedotjs } from "react-icons/si";

export default function Skills() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-black py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Professional & Technical <span className="text-[#80db66]">Skills</span>
                    </h1>
                </div>

                <div className="text-[#80db66] text-lg">
                    <span className="flex gap-3 items-center">
                        <BiRightArrow /> Programming Languages and frameworks
                    </span>

                    <div className="grid grid-cols-4 mt-16 gap-4">
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaPython className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaHtml5 className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaReact className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <SiExpress className="text-5xl"/> </div>
                        
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaPhp className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaNode className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaPython className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center cursor-pointer hover:bg-green-800 hover:text-white"> <FaGithub className="text-5xl"/> </div>

                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center"> <FaCss3 className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center"> <BiLogoTypescript className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center"> <FaFigma className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center"> <SiThreedotjs className="text-5xl"/> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}