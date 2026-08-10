import React from 'react';
import { Briefcase, Terminal, Database, Calendar, Activity } from 'lucide-react';
import { EXPERIENCE_CONTENT, ExperienceMetric } from '@/content/experience';

const metricIconMap: Record<ExperienceMetric['iconName'], React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
};

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-32 px-6 relative overflow-hidden bg-bg-main">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto">
          {EXPERIENCE_CONTENT.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 md:p-7 rounded-2xl bg-surface border border-surface shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-bg-main border border-surface flex items-center justify-center text-blue-inter shrink-0">
                {metricIconMap[metric.iconName]}
              </div>
              <div>
                <h4 className="text-3xl font-bold tracking-tight text-text-main">
                  {metric.value}
                </h4>
                <p className="text-xs md:text-sm text-text-sec font-medium leading-snug mt-0.5">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 md:left-1/2 top-4 bottom-8 -ml-px w-px bg-surface"></div>

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCE_CONTENT.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 top-8 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-bg-main border-2 border-blue-inter text-blue-inter">
                    <Activity className="w-3.5 h-3.5" />
                  </div>

                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 sm:pl-20 md:pl-0">
                    <div className="p-8 md:p-10 rounded-[2rem] bg-surface border border-surface shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

                      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                        <div>
                          <p className="text-xs font-medium text-text-disabled uppercase tracking-wide mb-2">
                            {exp.type}
                          </p>
                          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-text-main">
                            {exp.company}
                          </h3>
                          <p className="text-base md:text-lg font-medium text-blue-base mt-1">
                            {exp.role}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bg-main border border-surface text-text-sec text-xs font-mono font-medium shrink-0">
                          <Calendar className="w-3.5 h-3.5 text-blue-inter" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-3 text-text-sec leading-relaxed text-sm md:text-base font-light">
                            <span className="w-1 h-1 rounded-full bg-blue-inter shrink-0 mt-2.5"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6 border-t border-surface flex flex-wrap gap-2">
                        {exp.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-text-sec bg-bg-main border border-surface hover:border-blue-inter/40 hover:text-blue-inter transition-colors duration-300 cursor-default"
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
