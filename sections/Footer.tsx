import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-main pt-24 pb-8 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-32">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-2xl font-medium tracking-tight">Listo para el próximo nivel.</h3>
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium text-text-main">
            <span className="text-text-disabled mb-2">Social</span>
            <a href="#" className="hover:text-blue-inter">Github</a>
            <a href="#" className="hover:text-blue-inter">LinkedIn</a>
            <a href="#" className="hover:text-blue-inter">Twitter / X</a>
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium text-text-main">
            <span className="text-text-disabled mb-2">Navegación</span>
            <a href="#proyectos" className="hover:text-blue-inter">Proyectos</a>
            <a href="#habilidades" className="hover:text-blue-inter">Habilidades</a>
            <a href="#contacto" className="hover:text-blue-inter">Contacto</a>
          </div>
        </div>

        <div className="w-full flex justify-start mb-16 select-none pointer-events-none">
          <h1 className="text-[14vw] font-bold tracking-tighter text-text-main leading-none">
            anderlfrias.
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface text-sm text-text-sec font-medium">
          <div className="flex items-center gap-2 mb-4 md:mb-0 text-text-main">
            <Sparkles className="w-5 h-5 text-blue-base" />
            <span className="text-lg tracking-tight">anderlfrias</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-main">© {new Date().getFullYear()} Todos los derechos reservados.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
