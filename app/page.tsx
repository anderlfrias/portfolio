import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Skills from '@/sections/Skills';
import CodeSection from '@/sections/CodeSection';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#4285F4] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <CodeSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}