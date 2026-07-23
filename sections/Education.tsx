import { GraduationCap, Award, Calendar } from 'lucide-react';
import { EDUCATION_CONTENT } from '@/content/education';

export default function Education() {
  return (
    <section id="educacion" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto relative z-10">

        <div className="space-y-6 mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface shadow-sm text-text-sec text-sm font-semibold tracking-wide uppercase">
            <GraduationCap className="w-4 h-4 text-blue-base" /> {EDUCATION_CONTENT.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-text-main">
            {EDUCATION_CONTENT.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-surface rounded-[2rem] p-8 md:p-10 border border-surface shadow-sm">
            <h3 className="text-lg font-semibold text-text-main mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-base" /> Educación formal
            </h3>
            <ul className="space-y-6">
              {EDUCATION_CONTENT.degrees.map((degree, i) => (
                <li key={i} className={i > 0 ? 'pt-6 border-t border-bg-main' : ''}>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-medium text-text-main leading-snug">
                      {degree.title}
                      {degree.status && (
                        <span className="ml-2 text-xs font-medium text-blue-base bg-blue-base/10 border border-blue-base/20 px-2 py-0.5 rounded-full align-middle">
                          {degree.status}
                        </span>
                      )}
                    </h4>
                  </div>
                  <p className="text-sm text-text-sec mb-2">{degree.institution}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs text-text-disabled">
                    <Calendar className="w-3.5 h-3.5" /> {degree.period}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-[2rem] p-8 md:p-10 border border-surface shadow-sm">
            <h3 className="text-lg font-semibold text-text-main mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-base" /> Cursos y certificaciones
            </h3>
            <ul className="space-y-6">
              {EDUCATION_CONTENT.courses.map((course, i) => (
                <li key={i} className={i > 0 ? 'pt-6 border-t border-bg-main' : ''}>
                  <h4 className="font-medium text-text-main leading-snug mb-1">{course.name}</h4>
                  <p className="text-sm text-text-sec">{course.provider} · {course.year}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
