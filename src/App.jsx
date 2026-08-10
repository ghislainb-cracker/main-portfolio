import { useEffect } from "react";
import { Nav } from "./components/nav"
import { Hero } from "./components/Hero"
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Services from "./components/services";
import Resume from "./components/Resume";
import Contacts from "./components/MyContact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div#home");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="overflow-x-hidden">
        <div className="w-full h-screen pt-4 hero">
          <Nav />
          <Hero />

          <AboutMe />
          <Services />
          <Resume />
          <Projects />
          <Contacts />
          <Footer />
          {/* <Skills/> */}
        </div>
      </main>
    </>
  )
}