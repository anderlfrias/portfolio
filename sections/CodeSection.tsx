import { CODE_CONTENT } from '@/content/code';
import { Terminal } from 'lucide-react';

export default function CodeSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left text */}
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm font-semibold tracking-wide uppercase shadow-sm">
            <Terminal className="w-4 h-4 text-[#4285F4]" /> Filosofía de Desarrollo
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-yd font-medium tracking-tight text-gray-900 leading-tight">
            {CODE_CONTENT.titleLine1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335]">
              {CODE_CONTENT.titleLine2}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl font-light">
            {CODE_CONTENT.description}
          </p>
        </div>

        {/* Right Code Window */}
        <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-[#4285F4]/30 via-transparent to-[#EA4335]/30 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
          <div className="bg-[#fafafa] rounded-[2rem] overflow-hidden border border-white/50">
            {/* Header */}
            <div className="bg-white/80 border-b border-gray-100 px-6 py-4 flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm font-medium text-gray-600">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 border border-red-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-500/20"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 border border-green-500/20"></div>
              </div>
              <div className="flex gap-3 items-center self-end sm:self-auto">
                <span className="text-gray-400 font-mono text-xs">TypeScript</span>
                <span className="text-[#4285F4] bg-blue-50/50 border border-blue-100 px-3 py-1.5 rounded-lg font-mono text-xs">
                  {CODE_CONTENT.codeTitle}
                </span>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-8 md:p-10 font-mono text-sm md:text-base lg:text-lg overflow-x-auto text-gray-800 leading-loose">
              <span className="text-[#EA4335] font-semibold">function</span> <span className="text-[#4285F4] font-semibold">buildSystem</span>() {'{'}<br />
              <div className="pl-6 md:pl-8 py-2 border-l-2 border-gray-200 ml-2 md:ml-3 mt-3 mb-3 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-gray-100/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-[#34A853] font-medium">separateConcerns</span>();</div>
                  <span className="text-gray-400 italic text-sm sm:text-base hidden sm:inline-block">// Arquitectura modular</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-gray-100/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-[#34A853] font-medium">optimizePerformance</span>();</div>
                  <span className="text-gray-400 italic text-sm sm:text-base hidden sm:inline-block">// Consultas y cargas de datos</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-gray-100/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-[#34A853] font-medium">ensureScalability</span>();</div>
                  <span className="text-gray-400 italic text-sm sm:text-base hidden sm:inline-block">// Sistemas tolerantes a fallos</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 hover:bg-gray-100/50 p-1 -ml-1 rounded transition-colors">
                  <div><span className="text-[#34A853] font-medium">avoidTechnicalDebt</span>();</div>
                  <span className="text-gray-400 italic text-sm sm:text-base hidden sm:inline-block">// Decisiones de diseño a futuro</span>
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
