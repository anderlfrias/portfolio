import { Briefcase, Database, Server, Terminal, Calendar, Code2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-[-10%] w-[40%] h-[40%] bg-blue-base/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        {/* 1. INTRO BLOCK */}
        <div className="space-y-6 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface shadow-sm text-text-sec text-sm font-semibold tracking-wide uppercase">
            <Briefcase className="w-4 h-4 text-blue-base" /> Trayectoria
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-text-main">
            Experiencia construyendo software real.
          </h2>
          <p className="text-lg md:text-xl text-text-sec leading-relaxed font-light">
            Desde 2021 trabajo como ingeniero de software en Centro Médico Docente Siglo 21, donde hoy lidero decisiones técnicas.<br className="hidden md:block" /> Desde 2022 combino ese rol con proyectos independientes para otras empresas, aplicando el mismo enfoque a distintos dominios de negocio.
          </p>
        </div>

        {/* 2. METRICS BLOCK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24 max-w-xl mx-auto md:mx-0">
          {[
            { value: '4+ años', label: 'Desarrollando software', icon: <Terminal className="w-5 h-5" /> },
            { value: '8+', label: 'Sistemas empresariales construidos', icon: <Database className="w-5 h-5" /> },
          ].map((metric, i) => (
             <div key={i} className="p-6 bg-surface rounded-[1.5rem] border border-surface shadow-sm hover:shadow-md hover:border-blue-base/30 transition-all duration-300 group flex flex-col items-center sm:items-start text-center sm:text-left">
               <div className="mb-4 w-10 h-10 rounded-full bg-bg-main border border-surface flex items-center justify-center text-blue-base group-hover:scale-110 transition-transform duration-300">
                 {metric.icon}
               </div>
               <h4 className="text-2xl lg:text-3xl font-semibold tracking-tight text-text-main mb-1 group-hover:text-blue-base transition-colors duration-300">{metric.value}</h4>
               <p className="text-sm text-text-sec font-medium">{metric.label}</p>
             </div>
          ))}
        </div>

        {/* 3 & 4. PROFESSIONAL EXPERIENCE CARDS */}
        <div className="space-y-8">
          
          {/* Card 1 */}
          <div className="bg-surface rounded-[2rem] p-8 md:p-12 border border-surface shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-text-main mb-3">Centro Médico Docente Siglo 21</h3>
                <div className="text-blue-base font-medium text-lg flex items-center gap-2">
                  <Code2 className="w-5 h-5" /> Software Engineer · Technical Lead
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-main border border-surface text-text-sec text-sm font-medium shrink-0">
                <Calendar className="w-4 h-4" /> 2021 — Actualidad
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Diseñé y desarrollé una plataforma integral de facturación, inventario y contabilidad utilizada en producción, eliminando dependencia de software externo y reduciendo costos operativos.",
                "Implementé sistemas internos para gestión de servicios médicos a domicilio, integrando operaciones, facturación y métricas de negocio.",
                "Diseñé APIs REST para integración entre múltiples sistemas, mejorando consistencia y reduciendo fricción en el intercambio de datos.",
                "Lideré decisiones técnicas y coordinación del equipo de desarrollo, definiendo arquitectura y estándares de implementación.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-sec leading-relaxed font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-base/50 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-bg-main">
              {['Next.js', 'React', 'Node.js', 'MySQL', 'Linux', 'PM2'].map((tech, i) => (
                <span key={i} className="px-4 py-1.5 rounded-lg text-sm font-medium text-text-sec bg-bg-main border border-surface hover:text-blue-base transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-surface rounded-[2rem] p-8 md:p-12 border border-surface shadow-sm hover:shadow-lg transition-all duration-300">
             <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-text-main mb-3">Proyectos Independientes</h3>
                <div className="text-blue-base font-medium text-lg flex items-center gap-2">
                  <Server className="w-5 h-5" /> Desarrollo freelance, en paralelo a mi rol principal
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-main border border-surface text-text-sec text-sm font-medium shrink-0">
                <Calendar className="w-4 h-4" /> 2022 — Actualidad
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Sistema de gestión académica y financiera para una institución con múltiples sucursales.",
                "Sistema de gestión clínica multiempresa para consultorios médicos.",
                "Sistema de turnos y monitoreo operativo para medir tiempos de atención en tiempo real.",
                "Levantamiento de requerimientos y arquitectura directamente con cada cliente, de principio a fin.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-sec leading-relaxed font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-base/50 mt-2.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-bg-main">
              {['Next.js', 'React', 'Express', 'Sails.js', 'MongoDB', 'PostgreSQL'].map((tech, i) => (
                <span key={i} className="px-4 py-1.5 rounded-lg text-sm font-medium text-text-sec bg-bg-main border border-surface hover:text-blue-base transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
