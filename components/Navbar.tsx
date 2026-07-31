"use client";
import { useState, useEffect } from 'react';
import { ExternalLink, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optional: add a scroll effect to make the navbar slightly more opaque or shadowed
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg-main/90 backdrop-blur-lg border-b border-surface shadow-sm' : 'bg-bg-main/50 backdrop-blur-sm border-b border-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-semibold text-lg flex items-center gap-2 tracking-tight transition-transform duration-300 hover:scale-105 cursor-pointer text-text-main hover:no-underline">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span>anderlfrias</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium text-text-sec">
            <Link href="/#habilidades" className="hover:text-blue-inter transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1">Habilidades</Link>
            <Link href="/#experiencia" className="hover:text-blue-inter transition-all duration-300 hover:-translate-y-0.5">Experiencia</Link>
            <Link href="/#educacion" className="hover:text-blue-inter transition-all duration-300 hover:-translate-y-0.5">Educación</Link>
            <Link href="/#proyectos" className="hover:text-blue-inter transition-all duration-300 hover:-translate-y-0.5">Proyectos</Link>
            <Link href="/#contacto" className="hover:text-blue-inter transition-all duration-300 hover:-translate-y-0.5">Contacto</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:flex bg-blue-base text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#173E6B] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-base/20 items-center gap-2">
            Currículum <ExternalLink className="w-4 h-4" />
          </a>
          <button 
            className="md:hidden text-text-main p-2 transition-transform duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-bg-main border-b border-surface flex flex-col shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
          <Link href="/#habilidades" className="text-text-main hover:text-blue-inter font-medium py-3 px-4 rounded-xl hover:bg-surface/50 transition-all duration-300 active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>Habilidades</Link>
          <Link href="/#experiencia" className="text-text-main hover:text-blue-inter font-medium py-3 px-4 rounded-xl hover:bg-surface/50 transition-all duration-300 active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>Experiencia</Link>
          <Link href="/#educacion" className="text-text-main hover:text-blue-inter font-medium py-3 px-4 rounded-xl hover:bg-surface/50 transition-all duration-300 active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>Educación</Link>
          <Link href="/#proyectos" className="text-text-main hover:text-blue-inter font-medium py-3 px-4 rounded-xl hover:bg-surface/50 transition-all duration-300 active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>Proyectos</Link>
          <Link href="/#contacto" className="text-text-main hover:text-blue-inter font-medium py-3 px-4 rounded-xl hover:bg-surface/50 transition-all duration-300 active:scale-95" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
          <div className="pt-2 mt-2 border-t border-surface">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-base text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#173E6B] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              Currículum <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
