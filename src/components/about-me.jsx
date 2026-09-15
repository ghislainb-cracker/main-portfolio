import React from "react";
import { FaDolly } from "react-icons/fa6";

export default function AboutMe() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gradient-to-br dark:from-gray-950 dark:to-black py-20">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="reveal text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                        About <span className="text-[#80db66]">Me</span>
                    </h1>
                    <div className="section-line w-24 h-1 bg-[#80db66] mx-auto rounded-full"></div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-3">
                            <p className="reveal text-lg md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed" style={{ "--d": "80ms" }}>
                            I'm Ghislain, a young software developer obsessed with one question: <span className="font-bold">What can I build that actually matters?</span>
                        </p>

                            <p className="reveal text-lg md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed" style={{ "--d": "140ms" }}>
                            I didn't get into technology just to learn how to write code or build another website. I got into it because I see software as a way to turn ideas into things that can change how people live, work, and solve problems.
                        </p>

                            <p className="reveal text-lg md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed" style={{ "--d": "200ms" }}>
                            My path is taking me from software development into AI and product engineering. I'm learning how to build complete systems, from the interface people use, to the backend that powers it, to the intelligence that makes a product genuinely useful
                        </p>

                            <p className="reveal text-lg md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed" style={{ "--d": "260ms" }}>
                            I've already started putting that philosophy into practice. <span className="font-bold">PangaTrip</span> is one example: an AI-powered travel platform I'm building around a real problem, making it easier for people to discover Rwanda and plan their trips.
                        </p>

                            <p className="reveal text-lg md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed" style={{ "--d": "320ms" }}>
                            But PangaTrip is only the beginning. My bigger ambition is to become an AI-focused software engineer and eventually build technology products and companies from Africa that can compete beyond Africa.
                        </p>

                            <p className="reveal text-lg md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed" style={{ "--d": "380ms" }}>
                            I'm deliberately using these early years to develop the skills, discipline, and experience required to make that ambition real. I don't want to spend my career only building what someone else imagines. I want to become capable of imagining, building, and leading what comes next.
                        </p>
                    </div>


                    <div className="flex justify-center lg:justify-end">
                        <div className="relative reveal reveal-right" style={{ "--d": "180ms" }}>
                            <div className="w-80 h-80 bg-gradient-to-br from-[#80db66] to-green-400 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">

                                <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                                    <span className="text-slate-400 dark:text-gray-400 text-2xl font-bold"><h2 className="text-7xl">GB</h2></span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#80db66] rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#80db66] rounded-full opacity-30 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>


                <div className="text-center mt-16">
                    <button
                        type="button"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
                        className="reveal px-8 py-3 bg-[#80db66] text-gray-900 font-semibold rounded-lg hover:bg-green-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ "--d": "280ms" }}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
}