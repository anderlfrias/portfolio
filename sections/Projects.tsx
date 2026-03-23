import { Github, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/content/projects';

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 px-6 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Trabajos Destacados</h2>
        <a href="https://github.com/anderlfrias" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 font-medium hover:bg-gray-50 transition-colors">
          <Github className="w-4 h-4" /> Ver GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div className="bg-[#0f0f11] rounded-[2rem] h-72 mb-6 overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-3">
                Ver repositorio <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-2xl font-medium tracking-tight mb-2">{project.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{project.tags.join(' • ')}</span>
            </div>
            <p className="text-gray-600 flex items-center gap-1 font-medium">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
