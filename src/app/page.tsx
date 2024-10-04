import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      {/* Header Section */}
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Recent Skills Section */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      {/* Footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/papa.jpg"
              width={80}
              height={80}
              alt="Footer logo Image"
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
