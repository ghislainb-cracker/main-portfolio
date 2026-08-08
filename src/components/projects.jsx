import React, { useRef, useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Step 1: Put all your project data in one place — easy to add/edit projects later
const projects = [
  {
    title: "Lawfirm Website",
    description:
      "A professional law firm website designed to showcase legal services, build client trust, and make it easier for visitors to get in touch.",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: "/one.png",
    github: "https://github.com/ghislainb-cracker",
    live: "https://yourportfolio.com",
  },
  {
    title: "Afri-times News",
    description:
      "A news platform focused on delivering African stories and updates through a clean, accessible interface for discovering and reading articles.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/two.png",
    github: "https://github.com/ghislainb-cracker",
    live: "",
  },
  {
    title: "Apollo Connect",
    description:
      "A class communication platform built to help students connect, share information, and communicate more easily within their school community.",
    tags: ["React", "Socket.io", "Node.js"],
    image: "/three.png",
    github: "https://github.com/ghislainb-cracker",
    live: "",
  },
  {
    title: "Furn-Furniture",
    description:
      "A modern furniture shopping experience that helps users explore furniture products through a clean and visually focused interface.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    image: "/four.png",
    github: "https://github.com/ghislainb-cracker",
    live: "",
  },
  {
    title: "Koozi",
    description:
      "A student-focused saving platform designed to help young people build better saving habits and manage their money more intentionally.",
    tags: ["React", "Firebase", "JavaScript"],
    image: "/five.png",
    github: "https://github.com/ghislainb-cracker",
    live: "https://koozi.vercel.app/",
  },
  {
    title: "Visionary",
    description:
      "A technology project focused on turning ideas into practical digital experiences while exploring modern web development and intelligent solutions.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/six.png",
    github: "https://github.com/ghislainb-cracker",
    live: "",
  },
  {
    title: "APSMS",
    description:
      "A school management system designed to simplify academic administration, organize student information, and improve everyday school operations.",
    tags: ["Vue", "JavaScript", "Node.js"],
    image: "/seven.png",
    github: "https://github.com/ghislainb-cracker",
    live: "",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides users with real-time weather information through a simple and intuitive interface.",
    tags: ["React", "Express", "API"],
    image: "/eight.png",
    github: "https://github.com/ghislainb-cracker",
    live: "",
  },
  {
    title: "PangaTrip",
    description:
      "An AI-powered Rwanda trip advisor that helps travelers discover places, plan itineraries, and get personalized recommendations faster.",
    tags: ["React", "AI", "Vite", "Tailwind CSS"],
    image: "/pangatrip.png",
    github: "https://github.com/ghislainb-cracker",
    live: "https://www.pangatrip.site",
  },
];

export default function Projects() {
  const imageContainerRef = useRef(null);
  const [x, setX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Step size derives from the actual number of projects,
  // instead of being hardcoded to 45deg (which only worked for exactly 8 items).
  const step = 360 / projects.length;

  // Which project is currently facing forward, using the dynamic step.
  const activeIndex =
    (((-x / step) % projects.length) + projects.length) % projects.length;
  const activeProject = projects[activeIndex];

  const updateGallery = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    }

    // Only keep auto-rotating if the user isn't hovering/paused
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setX((prev) => prev - step);
      }, 3000);
    }
  };

  useEffect(() => {
    updateGallery();
    return () => clearTimeout(timerRef.current);
  }, [x, isPaused]);

  const prevEl = () => {
    clearTimeout(timerRef.current);
    setX((prev) => prev + step);
  };

  const nextEl = () => {
    clearTimeout(timerRef.current);
    setX((prev) => prev - step);
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950/100 to-black py-20">
      <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-5">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-[#80db66]">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-[#80db66] mx-auto rounded-full"></div>
        </div>

        {/* Carousel — pausing auto-rotate on hover so users can look without it spinning away */}
        <div
          className="image-container mt-30 mb-8 self-center"
          ref={imageContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {projects.map((project, index) => (
            <span
              key={index}
              style={{ "--i": index + 1, "--step": `${step}deg` }}
            >
              <img src={project.image} alt={project.title} />
            </span>
          ))}
        </div>

        <div className="btn-container flex gap-4 mb-20 sm:mt-14">
          <button className="btn prev" onClick={prevEl}>
            Prev
          </button>
          <button className="btn next" onClick={nextEl}>
            Next
          </button>
        </div>

        {/* Step 3: Details panel for whichever project is currently facing forward */}
        <div className="w-full rounded-xl p-6 text-center transition-all duration-300">
          <h3 className="text-2xl font-semibold text-white mb-2">
            {activeProject.title}
          </h3>
          <p className="text-white/70 font-light mb-4">
            {activeProject.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {activeProject.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-[#80db66]/10 text-[#80db66] border border-[#80db66]/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            {activeProject.github && (
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#80db66] transition-colors duration-200"
              >
                <FaGithub /> Code
              </a>
            )}
            {activeProject.live && (
              <a
                href={activeProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-[#80db66] transition-colors duration-200"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}