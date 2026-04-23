import { Sparkles, Terminal } from 'lucide-react';
import GalaxyTrail from '@/components/GalaxyTrail';
import { HERO_CONTENT } from '@/content/hero';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <GalaxyTrail dark={false} />

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-surface bg-bg-sec shadow-sm text-sm font-medium text-text-main">
          <Sparkles className="w-4 h-4 text-blue-base" />
          {HERO_CONTENT.badge}
        </div>

        <h1 className="text-6xl md:text-[5.5rem] lg:text-[6rem] font-medium tracking-tighter leading-[1.05] mb-8 text-text-main">
          {HERO_CONTENT.title}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-text-sec mb-8">
          {HERO_CONTENT.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          <a href="#proyectos" className="bg-blue-base text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#173E6B] transition-all shadow-lg flex items-center gap-3">
            <Terminal className="w-5 h-5" /> {HERO_CONTENT.primaryButton}
          </a>
          <a href="#contacto" className="bg-blue-inter border-none text-[#0F172A] px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
            {HERO_CONTENT.secondaryButton}
          </a>
        </div>
      </div>
    </section>
  );
}
