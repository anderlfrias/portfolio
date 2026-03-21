import { Mail } from 'lucide-react';
import GalaxyTrail from '@/components/GalaxyTrail';

export default function Contact() {
  return (
    <section id="contacto" className="relative py-40 px-6 bg-[#000000] text-white overflow-hidden rounded-t-[3rem]">
      <GalaxyTrail dark={true} />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-start">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-10">
          ¿Tienes una idea en mente?<br />
          Hagámosla realidad.
        </h2>
        <a href="mailto:hola@ejemplo.com" className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-3">
          <Mail className="w-5 h-5" /> Enviar mensaje
        </a>
      </div>
    </section>
  );
}
