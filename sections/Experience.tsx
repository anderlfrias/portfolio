import React from 'react';
import { Briefcase, Terminal, Database, Cpu, GitBranch, Code2, Server, Calendar, Sparkles, Activity } from 'lucide-react';
import { EXPERIENCE_CONTENT, ExperienceMetric } from '@/content/experience';

const metricIconMap: Record<ExperienceMetric['iconName'], React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 px-6 relative overflow-hidden bg-bg-main">
      {/* Background ambient glowing mesh (Antigravity vibe) */}
      <div className="absolute top-1/4 left-[-10%] w-[45%] h-[45%] bg-blue-base/15 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[40%] h-[40%] bg-blue-inter/15 blur-[140px] rounded-full pointer-events-none"></div>
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* 1. INTRO BLOCK */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surface shadow-sm text-text-sec text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-4 h-4 text-blue-inter" />
            <span>{EXPERIENCE_CONTENT.badge}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-main leading-[1.1]">
            {EXPERIENCE_CONTENT.title}
          </h2>

          <p className="text-lg md:text-xl text-text-sec leading-relaxed font-light">
            {EXPERIENCE_CONTENT.subtitle}
          </p>
        </div>

        {/* 2. HIGH-TECH METRICS BLOCK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto">
          {EXPERIENCE_CONTENT.metrics.map((metric, i) => (
            <div
              key={i}
              className="group relative p-6 md:p-7 rounded-[1.8rem] bg-surface/80 backdrop-blur-md border border-surface shadow-sm hover:shadow-[0_0_30px_rgba(57,184,201,0.12)] hover:border-blue-inter/40 transition-all duration-500 flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-bg-main border border-surface flex items-center justify-center text-blue-inter shrink-0 group-hover:scale-110 group-hover:border-blue-inter/40 group-hover:shadow-[0_0_20px_rgba(57,184,201,0.25)] transition-all duration-300">
                {metricIconMap[metric.iconName]}
              </div>
              <div>
                <h4 className="text-3xl font-bold tracking-tight text-text-main group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-base group-hover:to-blue-inter transition-all duration-300">
                  {metric.value}
                </h4>
                <p className="text-xs md:text-sm text-text-sec font-medium leading-snug mt-0.5">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. INTERACTIVE CIRCUIT / TIMELINE HUB */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (Desk & Mobile) */}
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-4 bottom-8 -ml-px w-[2px] bg-gradient-to-b from-blue-base via-blue-inter to-green-accent opacity-40"></div>

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCE_CONTENT.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 top-8 z-20 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-bg-main border-2 border-blue-inter text-blue-inter shadow-[0_0_15px_rgba(57,184,201,0.4)] group-hover:scale-125 group-hover:border-green-accent group-hover:text-green-accent transition-all duration-300">
                      <Activity className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 sm:pl-20 md:pl-0">
                    <div className="relative p-8 md:p-10 rounded-[2rem] bg-surface/90 backdrop-blur-md border border-surface shadow-sm group-hover:shadow-[0_0_35px_rgba(30,79,138,0.15)] group-hover:border-blue-inter/40 transition-all duration-500 ease-out">
                      
                      {/* Top Meta Line: Position & Date Tag */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                        <div>
                          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-bg-main border border-surface text-xs font-mono text-text-sec">
                            {exp.id === 'siglo-21' ? (
                              <Code2 className="w-3.5 h-3.5 text-blue-inter" />
                            ) : (
                              <Server className="w-3.5 h-3.5 text-green-accent" />
                            )}
                            <span>{exp.type}</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-text-main">
                            {exp.company}
                          </h3>
                          <p className="text-base md:text-lg font-medium text-blue-base mt-1 flex items-center gap-2">
                            {exp.role}
                          </p>
                        </div>

                        {/* Monospace Period Pill */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-base/10 border border-blue-base/20 text-blue-base text-xs font-mono font-medium shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Highlights / Bullet Points */}
                      <ul className="space-y-3.5 mb-8">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-text-sec leading-relaxed text-sm md:text-base font-light">
                            <Sparkles className="w-4 h-4 text-blue-inter shrink-0 mt-1 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="pt-6 border-t border-surface flex flex-wrap gap-2">
                        {exp.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium text-text-sec bg-bg-main/80 border border-surface hover:border-blue-inter/40 hover:text-blue-inter transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
