import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

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
                        <div className="w-40 h-40 rounded-full border-1 border-white flex justify-center items-center"> <FaPython className="text-5xl"/> </div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                        <div className="w-40 h-40 rounded-full border-1 border-white"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}