import React, { useRef, useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Step 1: Put all your project data in one place — easy to add/edit projects later
const projects = [
  {
    title: "Weather Application",
    description: "A personal portfolio built with React and Tailwind CSS, featuring smooth animations and a dark theme.",
    tags: ["React", "Tailwind CSS", "Vite"],
    image: "/one.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "Two",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Node.js", "MongoDB"],
    image: "/two.png",
    github: "https://github.com/yourusername/project-two",
    live: "",
  },
  {
    title: "Three",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Python", "Django"],
    image: "/three.png",
    github: "https://github.com/yourusername/project-three",
    live: "",
  },
  {
    title: "Four",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["React Native"],
    image: "/four.png",
    github: "https://github.com/yourusername/project-four",
    live: "",
  },
  {
    title: "Five",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["JavaScript"],
    image: "/five.png",
    github: "https://github.com/yourusername/project-five",
    live: "",
  },
  {
    title: "Six",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["TypeScript"],
    image: "/six.png",
    github: "https://github.com/yourusername/project-six",
    live: "",
  },
  {
    title: "Seven",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Vue"],
    image: "/seven.png",
    github: "https://github.com/yourusername/project-seven",
    live: "",
  },
  {
    title: "Eight",
    description: "Short description of what this project does and the problem it solves.",
    tags: ["Express"],
    image: "/eight.png",
    github: "https://github.com/yourusername/project-eight",
    live: "",
  },
];

export default function Projects() {
  const imageContainerRef = useRef(null);
  const [x, setX] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Step 2: Figure out which project is currently facing forward.
  // Each rotation step is 45deg, and there are 8 images (360 / 8 = 45).
  // We flip the sign and mod by projects.length to always land on a valid index.
  const activeIndex =
    (((-x / 45) % projects.length) + projects.length) % projects.length;
  const activeProject = projects[activeIndex];

  const updateGallery = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    }

    // Only keep auto-rotating if the user isn't hovering/paused
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setX((prev) => prev - 45);
      }, 3000);
    }
  };

  useEffect(() => {
    updateGallery();
    return () => clearTimeout(timerRef.current);
  }, [x, isPaused]);

  const prevEl = () => {
    clearTimeout(timerRef.current);
    setX((prev) => prev + 45);
  };

  const nextEl = () => {
    clearTimeout(timerRef.current);
    setX((prev) => prev - 45);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950/100 to-black py-20">
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
            <span key={index} style={{ "--i": index + 1 }}>
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