import { Sparkles, ChevronRight, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="font-semibold text-lg flex items-center gap-2 tracking-tight">
            <Sparkles className="w-5 h-5 text-[#4285F4]" />
            <span>anderlfrias</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#proyectos" className="hover:text-black transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-black transition-colors flex items-center gap-1">Habilidades <ChevronRight className="w-3 h-3 rotate-90" /></a>
            <a href="#experiencia" className="hover:text-black transition-colors">Experiencia</a>
            <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contacto" className="hidden md:flex bg-[#111] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition-all items-center gap-2">
            Contratarme <Mail className="w-4 h-4" />
          </a>
          <button className="md:hidden text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
