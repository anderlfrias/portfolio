import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, BookOpen, ShieldCheck } from 'lucide-react';
import { EDUCATION_CONTENT } from '@/content/education';

export default function Education() {
  return (
    <section id="educacion" className="py-24 md:py-32 px-6 relative overflow-hidden bg-bg-sec/30">
      {/* Decorative background glow */}
      <div className="absolute top-1/3 right-[-5%] w-[40%] h-[40%] bg-blue-inter/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-5%] w-[35%] h-[35%] bg-green-accent/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* 1. INTRO BLOCK */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-surface shadow-sm text-text-sec text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-4 h-4 text-blue-inter" />
            <span>{EDUCATION_CONTENT.badge}</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-text-main leading-[1.1]">
            {EDUCATION_CONTENT.title}
          </h2>

          <p className="text-lg md:text-xl text-text-sec leading-relaxed font-light">
            {EDUCATION_CONTENT.subtitle}
          </p>
        </div>

        {/* 2. DUAL BENTO GRID: Formal Education vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Block: Formal Education (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 mb-2 px-2">
              <div className="w-10 h-10 rounded-xl bg-blue-base/10 border border-blue-base/20 flex items-center justify-center text-blue-inter">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-main">Educación Formal</h3>
                <p className="text-xs text-text-sec">Grados universitarios y técnicos</p>
              </div>
            </div>

            <div className="space-y-6">
              {EDUCATION_CONTENT.degrees.map((degree, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-[2rem] bg-surface/90 backdrop-blur-md border border-surface shadow-sm hover:shadow-[0_0_30px_rgba(57,184,201,0.12)] hover:border-blue-inter/40 transition-all duration-500"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-bg-main border border-surface text-text-sec">
                          {degree.tag}
                        </span>
                        {degree.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-green-accent/10 border border-green-accent/30 text-green-accent">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-accent opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-accent"></span>
                            </span>
                            {degree.status}
                          </span>
                        )}
                      </div>
                      <h4 className="text-2xl font-medium text-text-main tracking-tight group-hover:text-blue-base transition-colors">
                        {degree.title}
                      </h4>
                      <p className="text-sm font-medium text-text-sec mt-0.5">
                        {degree.institution}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bg-main border border-surface text-xs font-mono text-text-sec shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-blue-inter" />
                      <span>{degree.period}</span>
                    </div>
                  </div>

                  {degree.description && (
                    <p className="text-sm text-text-sec leading-relaxed font-light pt-3 border-t border-surface/60">
                      {degree.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Certifications & Continuous Learning (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2 px-2">
              <div className="w-10 h-10 rounded-xl bg-green-accent/10 border border-green-accent/20 flex items-center justify-center text-green-accent">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-main">Certificaciones & Cursos</h3>
                <p className="text-xs text-text-sec">Acreditaciones especializadas</p>
              </div>
            </div>

            <div className="space-y-4">
              {EDUCATION_CONTENT.courses.map((course, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-[1.8rem] bg-surface/90 backdrop-blur-md border border-surface shadow-sm hover:shadow-[0_0_25px_rgba(57,184,201,0.12)] hover:border-blue-inter/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-accent shrink-0" />
                      <span className="text-xs font-mono text-text-sec">
                        {course.category}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-bg-main border border-surface text-xs font-mono text-text-disabled">
                      {course.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-text-main mb-1 group-hover:text-blue-inter transition-colors">
                    {course.name}
                  </h4>

                  <div className="flex items-center justify-between text-xs text-text-sec font-medium pt-2">
                    <span>Proveedor: <strong className="text-text-main">{course.provider}</strong></span>
                    {course.verified && (
                      <span className="flex items-center gap-1 text-green-accent font-mono text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Verificado
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Continuous Learning Card */}
            <div className="p-6 rounded-[1.8rem] bg-gradient-to-br from-blue-base/10 via-surface to-blue-inter/10 border border-blue-base/20 shadow-sm text-center">
              <p className="text-xs font-mono text-blue-inter mb-1">AUTOAPRENDIZAJE CONTINUO</p>
              <p className="text-sm text-text-sec font-light">
                Constantemente perfeccionando habilidades en nuevas tecnologías, arquitectura de sistemas y seguridad.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
