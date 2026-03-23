import React from 'react';
import { SKILLS_CONTENT } from '@/content/skills';
import { Layers, Zap, CheckCircle2, Server, Terminal, Database, Code2 } from 'lucide-react';

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 md:py-32 px-6 bg-gray-50/50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white to-transparent opacity-80 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Columna Izquierda - Mensaje Principal */}
          <div className="lg:col-span-6 space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-600 text-sm font-semibold tracking-wide uppercase">
              <Zap className="w-4 h-4 text-[#4285F4]" /> Enfoque Técnico
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-gray-900">
                {SKILLS_CONTENT.headline}
              </h2>

              <h3 className="text-xl md:text-2xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335] leading-relaxed max-w-2xl">
                {SKILLS_CONTENT.specialization}
              </h3>
            </div>
            
            <div className="pt-8 md:pt-12">
               <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                  {SKILLS_CONTENT.proof}
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Bento Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tarjeta 1: Forma de trabajar */}
              <div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-[#4285F4]">
                    <Layers className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Arquitectura & Escalabilidad</h4>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {SKILLS_CONTENT.workingStyle}
                </p>
              </div>

              {/* Tarjeta 2: Stack Tech */}
              <div className="col-span-1 md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                     <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">Ecosistema Principal</h4>
                  </div>
                  <div className="flex -space-x-3 opacity-70 hidden sm:flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center"><Database className="w-4 h-4 text-gray-500" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center"><Server className="w-4 h-4 text-gray-500" /></div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center"><Terminal className="w-4 h-4 text-gray-500" /></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {SKILLS_CONTENT.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 hover:bg-white hover:border-[#4285F4] hover:text-[#4285F4] hover:shadow-sm transition-all duration-300 cursor-default"
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
