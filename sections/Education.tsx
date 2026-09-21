import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { EDUCATION_CONTENT } from '@/content/education';

export default function Education() {
  return (
    <section id="educacion" className="py-24 md:py-32 px-6 bg-bg-sec/30">
      <div className="max-w-[1200px] mx-auto">

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

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
                  className="p-8 rounded-[2rem] bg-surface border border-surface shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap text-xs font-mono font-medium text-text-disabled uppercase tracking-wide">
                        <span>{degree.tag}</span>
                        {degree.isCurrent && (
                          <span className="text-green-accent">· {degree.status}</span>
                        )}
                      </div>
                      <h4 className="text-2xl font-medium text-text-main tracking-tight">
                        {degree.title}
                      </h4>
                      <p className="text-sm font-medium text-text-sec mt-0.5">
                        {degree.institution}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-bg-main border border-surface text-text-sec text-xs font-mono font-medium shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-blue-inter" />
                      <span>{degree.period}</span>
                    </div>
                  </div>

                  {degree.description && (
                    <p className="text-sm text-text-sec leading-relaxed font-light pt-3 border-t border-surface">
                      {degree.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

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
                  className="p-6 rounded-2xl bg-surface border border-surface shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-xs font-mono font-medium text-text-disabled uppercase tracking-wide">
                      {course.category}
                    </span>
                    <span className="text-xs font-mono font-medium text-text-disabled">
                      {course.year}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-text-main mb-1">
                    {course.name}
                  </h4>

                  <p className="text-xs text-text-sec font-medium pt-2">{course.provider}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-surface text-center">
              <p className="text-xs font-mono font-medium text-blue-inter uppercase tracking-wide mb-1">
                Autoaprendizaje continuo
              </p>
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
