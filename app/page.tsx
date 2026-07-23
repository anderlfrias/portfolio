import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-main text-text-main font-sans selection:bg-blue-base selection:text-text-main overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}