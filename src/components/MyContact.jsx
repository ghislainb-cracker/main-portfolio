import React from "react"
import ServiceCard from "./templates/service_card.jsx"
import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Contacts() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-black py-20">
            <div className="max-w-6xl mx-auto px-5 w-full h-full">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        Get <span className="text-[#80db66]">In Touch</span>
                    </h1>
                </div>

                <div className="w-full h-full flex gap-4 text-white">
                    <div className="w-[60%] pr-15">
                        <form action="" className="bg-gray-800 p-5 rounded-lg">
                            <h3 className="font-semibold mt-3">Name</h3>
                            <input type="text" name="name" id="" placeholder="Your name" className="bg-gray-900 w-full px-2 py-2 text-white/60 mt-2 rounded-lg"/>

                            <h3 className="font-semibold mt-3">Email</h3>
                            <input type="text" name="email" id="" placeholder="How can I help?" className="bg-gray-900 w-full px-2 py-2 text-white/60 mt-2 rounded-lg"/>

                            <h3 className="font-semibold mt-3">Subject</h3>
                            <input type="text" name="subject" id="" placeholder="youremail@example.com" className="bg-gray-900 w-full px-2 py-2 text-white/60 mt-2 rounded-lg"/>

                            <h3 className="font-semibold mt-3">Message</h3>
                            <input type="text" name="message" id="" placeholder="Tell me about your project" className="bg-gray-900 w-full text-start h-30 px-2 py-2 text-white/60 mt-2 rounded-lg"/>

                            <button className="w-full px-2 py-3 rounded-lg flex items-center justify-center bg-[#80db66] mt-6 text-black font-semibold cursor-pointer">Send Message</button>
                        </form>
                    </div>
                    
                    <div className="w-[40%]">
                        <div className="px-5 py-2 bg-gray-800 h-[50%] rounded-lg">
                            <h2 className="text-xl font-semibold">Let's Connect</h2>
                            <p className="text-[16px] text-white/80">I'm always open to discussing new projects, creative ideas, or opportunitiesto be part of your visions.</p>

                            <div className="grid grid-cols-2 gap-3 mt-4">
                                <button className="h-7 flex items-center gap-1.5 bg-gray-900 py-6 px-3 rounded-lg">
                                    <FaGithub/>
                                    Github
                                </button>
                                <button className="h-7 flex items-center gap-1.5 bg-gray-900 py-6 px-3 rounded-lg">
                                    <FaLinkedin/>
                                    LinkedIn
                                </button>
                                <button className="h-7 flex items-center gap-1.5 bg-gray-900 py-6 px-3 rounded-lg">
                                    <FaX/>
                                    X
                                </button>
                                <button className="h-7 flex items-center gap-1.5 bg-gray-900 py-6 px-3 rounded-lg">
                                    <MdEmail/>
                                    Email
                                </button>
                            </div>
                        </div>
                        <div className="px-3 py-2 bg-gray-800 h-[45%] mt-6 rounded-lg">
                            <h2 className="text-xl font-semibold">Quick Facts:</h2>

                            <ul className="mt-5 space-y-4">
                                <li>🟢 Based in Rwanda, working globally</li>
                                <li>🟢 Available for freelance projects</li>
                                <li>🟢 Available for special projects and opportunities</li>
                                <li>🟢 Response time: Usually within 24 hours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}