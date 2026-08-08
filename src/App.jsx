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
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <>
    <Analytics>
      <main className="overflow-x-hidden">
        <div className="w-full h-screen pt-4 hero">
        <Nav />
        <Hero/>
        
        <AboutMe/>
        <Services/>
        <Resume/>
        <Projects/>
        <Contacts/>
        <Footer/>
        {/* <Skills/> */}
        </div>
      </main>
      </Analytics>
    </>
  )
}