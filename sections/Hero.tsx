import { Terminal } from 'lucide-react';
import Image from 'next/image';
import GalaxyTrail from '@/components/GalaxyTrail';
import { HERO_CONTENT } from '@/content/hero';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <GalaxyTrail dark={false} />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-surface bg-bg-sec shadow-sm text-sm font-medium text-text-main">
            <Image src="/logo-trazo.svg"
              alt="Logo trazo"
              width={24}
              height={24}
              className="object-contain font-bold text-blue-800"
              unoptimized
            />
            {HERO_CONTENT.badge}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.05] mb-6 text-text-main">
            {HERO_CONTENT.title}
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-text-sec mb-8">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a href="#proyectos" className="bg-blue-base text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#173E6B] transition-all shadow-lg flex items-center gap-3">
              <Terminal className="w-5 h-5" /> {HERO_CONTENT.primaryButton}
            </a>
            <a href="#contacto" className="bg-blue-inter border-none text-[#0F172A] px-8 py-4 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all">
              {HERO_CONTENT.secondaryButton}
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="relative flex justify-center lg:justify-end order-first lg:order-none">
          <div className="absolute -z-10 w-72 h-72 bg-blue-base/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="group relative w-56 sm:w-72 lg:w-80 aspect-[3/4]">
            {/* Decorative outlines echoing the photo's shape, tilted to both sides */}
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-blue-base/60 rotate-[-10deg] transition-transform duration-500 ease-out group-hover:rotate-[-16deg] group-hover:-translate-x-2"></div>
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-blue-inter/60 rotate-[8deg] transition-transform duration-500 ease-out group-hover:rotate-[14deg] group-hover:translate-x-2"></div>
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-green-accent/60 rotate-[-4deg] transition-transform duration-500 ease-out group-hover:rotate-[-7deg] group-hover:-translate-y-2"></div>

            {/* Photo, on top */}
            <div className="relative z-10 w-full h-full p-[1px] rounded-[2.5rem] bg-gradient-to-br from-blue-base/40 via-transparent to-blue-inter/40 shadow-xl transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-bg-sec">
                <Image src="/new-profile-foto.jpg"
                  alt="Anderson Frias"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
