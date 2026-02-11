import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-rose-500/30">
<Navbar />
      <main className="max-w-5xl mx-auto px-6 space-y-32 pb-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}