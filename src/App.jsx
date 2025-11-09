import { Nav } from "./components/nav"
import { Hero } from "./components/Hero"
import AboutMe from "./components/about-me";
import "./App.css";

export default function App() {
  return (
    <>
      <main>
        <div className="w-full h-screen pt-4 hero">
        <Nav />
        <Hero/>
        <AboutMe/>
        </div>
      </main>
    </>
  )
}