import React from 'react';
import { SKILLS_CONTENT } from '@/content/skills';
import { Layers, Zap, CheckCircle2, Server, Terminal, Database, Code2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 md:py-32 px-6 bg-bg-sec/50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bg-main to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-base/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Columna Izquierda - Mensaje Principal */}
          <div className="lg:col-span-6 space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface shadow-sm text-text-sec text-sm font-semibold tracking-wide uppercase">
              <Zap className="w-4 h-4 text-blue-base" /> Enfoque Técnico
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-text-main">
                {SKILLS_CONTENT.headline}
              </h2>

              <h3 className="text-xl md:text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-base to-blue-inter leading-relaxed max-w-2xl">
                {SKILLS_CONTENT.specialization}
              </h3>
            </div>
            
            <div className="pt-8 md:pt-12">
               <div className="p-6 bg-surface rounded-2xl border border-surface shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
                <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-sec font-medium leading-relaxed">
                  {SKILLS_CONTENT.proof}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Bento Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tarjeta 1: Forma de trabajar */}
              <div className="col-span-1 md:col-span-2 bg-surface rounded-[2rem] p-8 md:p-10 border border-surface shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-base/10 border border-blue-base/20 flex items-center justify-center text-blue-base">
                    <Layers className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-text-main">Arquitectura & Escalabilidad</h4>
                </div>
                <p className="text-lg text-text-sec leading-relaxed font-light">
                  {SKILLS_CONTENT.workingStyle}
                </p>
              </div>

              {/* Tarjeta 2: Stack Tech */}
              <div className="col-span-1 md:col-span-2 bg-surface rounded-[2rem] p-8 md:p-10 border border-surface shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-2xl bg-bg-main border border-surface flex items-center justify-center text-text-main">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-semibold text-text-main">Ecosistema Principal</h4>
                  </div>
                  <div className="flex -space-x-3 opacity-70 hidden sm:flex">
                    <div className="w-10 h-10 rounded-full border-2 border-bg-sec bg-surface flex items-center justify-center"><Database className="w-4 h-4 text-text-sec" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-bg-sec bg-surface flex items-center justify-center"><Server className="w-4 h-4 text-text-sec" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-bg-sec bg-surface flex items-center justify-center"><Terminal className="w-4 h-4 text-text-sec" /></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {SKILLS_CONTENT.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-text-sec bg-bg-main border border-surface hover:bg-surface hover:border-blue-base hover:text-blue-base hover:shadow-sm transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
