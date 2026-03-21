import React from 'react';
import { Layout, Terminal, Database, Code2, Github, Sparkles } from 'lucide-react';
import { SKILLS_CONTENT } from '@/content/skills';

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="py-32 px-6 bg-white relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16">
          {[<Layout key="layout" />, <Terminal key="terminal" />, <Database key="database" />, <Code2 key="code2" />, <Github key="github" />, <Sparkles key="sparkles" />, <LayersIcon key="layers" />].map((icon, i) => (
            <div key={i} className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#4285F4] hover:text-[#4285F4] transition-colors cursor-pointer bg-white shadow-sm hover:shadow-md transform hover:-translate-y-1 duration-200">
              {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-6 h-6' })}
            </div>
          ))}
        </div>

        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-[#111]">
            {SKILLS_CONTENT.text}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335]">{SKILLS_CONTENT.highlight}</span>.
          </h2>
        </div>
      </div>
    </section>
  );
}
