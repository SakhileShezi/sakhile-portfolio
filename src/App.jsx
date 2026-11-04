import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // <-- Add this

export default function App() {
  return (
    <div className="bg-slate-950 dark:bg-slate-950 text-white flex flex-col min-h-screen">
      <Navbar />
      {/* flex-grow ensures the footer gets pushed to the bottom if the page is short */}
      <main className="flex-grow pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* <-- Add this */}
    </div>
  );
}