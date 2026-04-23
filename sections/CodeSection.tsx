import { CODE_CONTENT } from '@/content/code';
import { Terminal } from 'lucide-react';

export default function CodeSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-bg-main border-y border-surface">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left text */}
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-sec border border-surface text-text-sec text-sm font-semibold tracking-wide uppercase shadow-sm">
            <Terminal className="w-4 h-4 text-blue-base" /> Filosofía de Desarrollo
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-yd font-medium tracking-tight text-text-main leading-tight">
            {CODE_CONTENT.titleLine1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-base to-blue-inter">
              {CODE_CONTENT.titleLine2}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-text-sec leading-relaxed max-w-xl font-light">
            {CODE_CONTENT.description}
          </p>
        </div>

        {/* Right Code Window */}
        <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-blue-base/30 via-transparent to-blue-inter/30 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div className="bg-bg-sec rounded-[2rem] overflow-hidden border border-surface">
            {/* Header */}
            <div className="bg-bg-main/80 border-b border-surface px-6 py-4 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm font-medium text-text-sec">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 border border-green-500/20"></div>
              </div>
              <div className="flex gap-3 items-center self-end sm:self-auto">
                <span className="text-text-disabled font-mono text-xs">TypeScript</span>
                <span className="text-blue-inter bg-blue-base/10 border border-blue-base/20 px-3 py-1.5 rounded-lg font-mono text-xs">
                  {CODE_CONTENT.codeTitle}
                </span>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-8 md:p-10 font-mono text-sm md:text-base lg:text-lg overflow-x-auto text-text-main leading-loose">
              <span className="text-state-warn font-semibold">function</span> <span className="text-blue-base font-semibold">buildSystem</span>() {'{'}<br />
              <div className="pl-6 md:pl-8 py-2 border-l-2 border-surface ml-2 md:ml-3 mt-3 mb-3 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-surface/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-green-accent font-medium">separateConcerns</span>();</div>
                  <span className="text-text-disabled italic text-sm sm:text-base hidden sm:inline-block">// Arquitectura modular</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-surface/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-green-accent font-medium">optimizePerformance</span>();</div>
                  <span className="text-text-disabled italic text-sm sm:text-base hidden sm:inline-block">// Consultas y cargas de datos</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-surface/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-green-accent font-medium">ensureScalability</span>();</div>
                  <span className="text-text-disabled italic text-sm sm:text-base hidden sm:inline-block">// Sistemas tolerantes a fallos</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-surface/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-green-accent font-medium">avoidTechnicalDebt</span>();</div>
                  <span className="text-text-disabled italic text-sm sm:text-base hidden sm:inline-block">// Decisiones de diseño a futuro</span>
                </div>
              </div>
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
