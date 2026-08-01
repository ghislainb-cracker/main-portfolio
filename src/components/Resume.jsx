import React, { useState } from "react";
import {
    SiPython,
    SiCplusplus,
    SiJavascript,
    SiSwift,
    SiGraphql,
    SiRuby,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiDjango,
    SiReact,
    SiNodedotjs,
} from "react-icons/si";

// Step 1: Put all your tab content in one place.
const resumeData = {
    experience: {
        title: "My experience",
        description:
            "A track record of impactful roles in software engineering and IT, demonstrating skills in various programming languages and technologies.",
        items: [
            { date: "Mar, 2020-May,2021", role: "Software Engineer Intern", company: "Techrise Rwanda" },
            { date: "2021-2022", role: "Software Engineer", company: "Techrise Rwanda" },
            { date: "2022-2023", role: "Frontend Developer", company: "Techrise Rwanda" },
            { date: "2023-2024", role: "Backend Developer", company: "Techrise Rwanda" },
            { date: "2024-2025", role: "Full Stack Developer", company: "Techrise Rwanda" },
        ],
    },
    education: {
        title: "My education",
        description:
            "A blend of formal education and self-directed learning, focusing on Computer Science, Economics, and various programming technologies.",
        items: [
            { date: "2016-2020", role: "BSc Computer Science", company: "University of Rwanda" },
            { date: "2014-2016", role: "High School Diploma", company: "Green Hills Academy" },
        ],
    },
    skills: {
        title: "My skills",
        description:
            "A diverse set of programming languages and technologies, with a focus on software engineering, web development, and data structures.",
    },
    about: {
        title: "About me",
        description:
            "I'm a dedicated Computer Science and Economics student at Swarthmore College, passionate about leveraging technology to solve real-world problems. With a diverse set of experiences in software engineering and IT, I'm constantly seeking new challenges and opportunities to grow.",
    },
};

// Icon list for the Skills tab
const skillsList = [
    { icon: SiPython, name: "Python" },
    { icon: SiCplusplus, name: "C++" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiSwift, name: "Swift" },
    { icon: SiGraphql, name: "GraphQL" },
    { icon: SiRuby, name: "Ruby" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiDjango, name: "Django" },
    { icon: SiReact, name: "React" },
];

// Personal info pairs for the About Me tab
const aboutInfo = [
    { label: "Name", value: "Germain Hirwa" },
    { label: "Phone", value: "(+1) 484 475 7225" },
    { label: "Experience", value: "4+ Years" },
    { label: "GitHub", value: "germainhirwa" },
    { label: "Nationality", value: "Rwandan" },
    { label: "Email", value: "higermain1@gmail.com" },
    { label: "Education", value: "Swarthmore College" },
    { label: "Language", value: "English, French & Swahili" },
];

const tabs = [
    { key: "experience", label: "Experience" },
    { key: "education", label: "Education" },
    { key: "skills", label: "Skills" },
    { key: "about", label: "About Me" },
];

export default function Resume() {
    const [activeTab, setActiveTab] = useState("experience");
    const activeContent = resumeData[activeTab];

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-black py-20">
            <div className="max-w-6xl mx-auto px-5 w-full">

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        My <span className="text-[#80db66]">Resume</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#80db66] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-12 items-center">

                    <div className="flex min-h-[400px] rounded-xl overflow-hidden">

                        {/* Tab buttons */}
                        <div className="w-[30%] flex flex-col pt-1 pr-3 space-y-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`w-full text-lg py-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                                        activeTab === tab.key
                                            ? "bg-[#80db66] text-black"
                                            : "bg-gray-800 text-white hover:bg-gray-700"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content that changes based on activeTab */}
                        <div className="w-[70%] flex flex-col text-white pl-5 scroll">
                            <div>
                                <h3 className="font-medium">{activeContent.title}</h3>
                                <p className="mt-2 font-light text-white/80">
                                    {activeContent.description}
                                </p>
                            </div>

                            <div
                                className={`mt-3 h-110 overflow-y-scroll gap-2.5 pr-2 custom-scrollbar grid ${
                                    activeTab === "skills" ? "grid-cols-4" : "grid-cols-2"
                                }`}
                            >
                                {activeTab === "skills" ? (
                                    skillsList.map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (
                                            <div
                                                key={index}
                                                title={skill.name}
                                                className="h-28 bg-gray-800 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                                            >
                                                <Icon className="text-white text-4xl" />
                                            </div>
                                        );
                                    })
                                ) : activeTab === "about" ? (
                                    aboutInfo.map((info, index) => (
                                        <div key={index} className="flex flex-col mb-4">
                                            <span className="text-white/50 text-sm">{info.label}</span>
                                            <span className="font-semibold text-lg mt-1">{info.value}</span>
                                        </div>
                                    ))
                                ) : (
                                    activeContent.items.map((item, index) => (
                                        <div key={index} className="h-40 bg-gray-800 p-3 pl-8 rounded-md">
                                            {item.date && <p className="text-lg text-[#80db66]">{item.date}</p>}
                                            <h2 className="font-medium text-xl mt-2">{item.role}</h2>
                                            {item.company && <p className="text-white/70 mt-5">&gt;{item.company}</p>}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}