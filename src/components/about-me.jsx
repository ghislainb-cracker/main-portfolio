import React from "react";

export default function AboutMe() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black py-20 px-6">
            <div className="max-w-4xl mx-auto">

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        About <span className="text-[#80db66]">Me</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#80db66] mx-auto rounded-full"></div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Passionate about computer science, driven by exploring opportunities and solving complex problems,
                            I constantly seek new challenges and push boundaries by creating cutting-edge software and applications.
                        </p>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            I am currently pursuing a Computer Science degree with a minor in Information and Data Science at
                            <span className="text-[#80db66] font-semibold"> California Institute of Technology</span>.
                        </p>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            When I'm not occupied with pursuing my career, I enjoy spending quality time with family and friends.
                        </p>


                        <div className="flex flex-wrap gap-3 mt-8">
                            {['Problem Solving', 'Software Development', 'Data Science', 'Innovation'].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-800 text-[#80db66] rounded-full text-sm font-medium border border-gray-700 hover:bg-gray-700 transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-[#80db66] to-green-400 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">

                                <div className="absolute inset-4 bg-gray-800 rounded-xl flex items-center justify-center">
                                    <span className="text-gray-400 text-lg">Your Photo</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#80db66] rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#80db66] rounded-full opacity-30 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>


                <div className="text-center mt-16">
                    <button className="px-8 py-3 bg-[#80db66] text-gray-900 font-semibold rounded-lg hover:bg-green-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
}