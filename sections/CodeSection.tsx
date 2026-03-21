import { CODE_CONTENT } from '@/content/code';

export default function CodeSection() {
  return (
    <section className="py-32 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            {CODE_CONTENT.titleLine1}<br />{CODE_CONTENT.titleLine2}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-md">
            {CODE_CONTENT.description}
          </p>
        </div>

        <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-[#4285F4]/30 via-transparent to-[#EA4335]/30 shadow-2xl">
          <div className="bg-white rounded-[23px] overflow-hidden">
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex gap-4 items-center text-sm font-medium text-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex gap-4 ml-4">
                <span className="text-gray-400">Arquitectura</span>
                <span className="text-[#4285F4] bg-blue-50 px-2 py-1 rounded-md">Developer.tsx</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto text-gray-700 leading-loose">
              <span className="text-purple-600">import</span> {'{'} Calidad, Rendimiento {'}'} <span className="text-purple-600">from</span> <span className="text-green-600">&apos;@best-practices/core&apos;</span>;<br /><br />
              <span className="text-purple-600">export default function</span> <span className="text-blue-600">EntregarProyecto</span>() {'{'}<br />
              &nbsp;&nbsp;<span className="text-purple-600">return</span> (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-500">Producto</span> <span className="text-orange-500">escalable</span>=<span className="text-blue-600">{'{'}true{'}'}</span>&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-500">ExperienciaUsuario</span> <span className="text-orange-500">optimizada</span> /&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-red-500">Producto</span>&gt;<br />
              &nbsp;&nbsp;);<br />
              {'}'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
