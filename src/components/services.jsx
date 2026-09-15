import React from "react"
import ServiceCard from "./templates/service_card.jsx"

const services = [
    {
        serviceNumber: "01",
        serviceName: "AI Development",
        Service_description: "I build intelligent chatbots and AI-powered tools that automate tasks and improve user experiences.",
    },
    {
        serviceNumber: "02",
        serviceName: "Full-Stack Web Development",
        Service_description: "I create complete, responsive web applications with reliable frontend, backend, and database systems.",
    },
    {
        serviceNumber: "03",
        serviceName: "Frontend Development",
        Service_description: "I design modern, fast, and mobile-friendly interfaces using React, Next.js, and Tailwind CSS.",
    },
    {
        serviceNumber: "04",
        serviceName: "Backend Development",
        Service_description: "I develop secure APIs, authentication systems, databases, and real-time application features.",
    },
    {
        serviceNumber: "05",
        serviceName: "Python Automation",
        Service_description: "I build Python scripts that automate repetitive tasks, process data, and improve productivity.",
    },
    {
        serviceNumber: "06",
        serviceName: "SaaS MVP Developement",
        Service_description: "I turn startup ideas into functional minimum viable products ready for testing and user feedback.",
    },
    {
        serviceNumber: "07",
        serviceName: "Bug Fixing & Optimization",
        Service_description: "I identify technical problems, fix application bugs, and improve website speed and performance.",
    },
    {
        serviceNumber: "08",
        serviceName: "API Integration",
        Service_description: "I connect websites and applications with third-party services, payment systems, and AI platforms.",
    },
    {
        serviceNumber: "09",
        serviceName: "Deployment and Hosting",
        Service_description: "I deploy websites, configure domains, enable SSL, and prepare applications for production use.",
    },
]

export default function Services() {
    return (
        <section id="services" className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-gradient-to-br dark:from-gray-950 dark:to-black py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="reveal text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
                        What I <span className="text-[#80db66]">Do</span>
                    </h1>
                    <div className="section-line w-24 h-1 bg-[#80db66] mx-auto rounded-full mt-4"></div>
                </div>

                <div className="grid gap-2 md:grid-cols-1 lg:grid-cols-3 items-center justify-center">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.serviceNumber}
                            delay={index * 70}
                            {...service}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
