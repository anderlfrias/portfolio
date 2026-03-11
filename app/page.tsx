"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Download, ChevronRight, Github, Linkedin, Mail, Layout, Terminal, Database, Code2, ArrowRight, Sparkles } from 'lucide-react';

// --- INTERFACES TYPESCRIPT ---
interface TrailParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

interface GalaxyTrailProps {
  dark?: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const GalaxyTrail: React.FC<GalaxyTrailProps> = ({ dark = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: TrailParticle[] = [];
    
    // Iniciar no centro
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let angle = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calcular a posição relativa ao canvas atual
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Centralizar novamente se for redimensionado
      mouse = { x: canvas.width / 2, y: canvas.height / 2 };
      targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Paleta de cores da galáxia (Azul, Roxo, Vermelho)
    const colors = ['#4285F4', '#9333EA', '#EA4335'];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Interpolação suave para que a galáxia siga o cursor com um leve atraso
      const dx = targetMouse.x - mouse.x;
      const dy = targetMouse.y - mouse.y;
      mouse.x += dx * 0.15;
      mouse.y += dy * 0.15;
      
      angle += 0.08; // Velocidade de rotação central

      // Emitir novas partículas nos "braços" da galáxia
      const arms = 3;
      for (let i = 0; i < arms; i++) {
        const currentAngle = angle + (i * Math.PI * 2) / arms;
        const radius = 10; // Raio inicial do núcleo
        const px = mouse.x + Math.cos(currentAngle) * radius;
        const py = mouse.y + Math.sin(currentAngle) * radius;

        particles.push({
          x: px,
          y: py,
          // Velocidade tangencial (giro) + uma porcentagem da inércia do mouse
          vx: Math.cos(currentAngle + Math.PI / 2) * 2 + dx * 0.02,
          vy: Math.sin(currentAngle + Math.PI / 2) * 2 + dy * 0.02,
          size: Math.random() * 4.5 + 2.5, // Partículas maiores
          color: colors[i],
          life: 0,
          maxLife: 60 + Math.random() * 40 // Rastro consideravelmente mais longo
        });
      }

      // Configurar modo de mesclagem para o efeito brilhante
      ctx.globalCompositeOperation = dark ? 'lighter' : 'multiply';

      // Atualizar e desenhar partículas
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        
        // Fricção para que se expandam e depois parem suavemente
        p.vx *= 0.96;
        p.vy *= 0.96;

        const progress = p.life / p.maxLife;
        if (progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        // Encolhem à medida que morrem
        const currentSize = p.size * (1 - progress);
        const alpha = 1 - Math.pow(progress, 2); // Curva de desvanecimento

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        // No tema claro usamos menos opacidade para não saturar o fundo branco
        ctx.globalAlpha = dark ? alpha : alpha * 0.5; 
        
        if (dark) {
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [dark]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

// --- DATA ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Nova',
    description: 'Desarrollo full-stack de una tienda online con pasarela de pagos, gestión de inventario y panel de admin.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'Stripe']
  },
  {
    id: 2,
    title: 'Dashboard Analítico',
    description: 'Plataforma B2B para visualización de métricas en tiempo real, optimizando el rendimiento de consultas SQL.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vue', 'PostgreSQL', 'AWS']
  },
  {
    id: 3,
    title: 'TaskFlow App',
    description: 'Aplicación de gestión de proyectos con actualizaciones en tiempo real y arquitectura serverless.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'Prisma', 'Sockets']
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#4285F4] selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="font-semibold text-lg flex items-center gap-2 tracking-tight">
              <Sparkles className="w-5 h-5 text-[#4285F4]" />
              <span>anderlfrias</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="#proyectos" className="hover:text-black transition-colors">Proyectos</a>
              <a href="#habilidades" className="hover:text-black transition-colors flex items-center gap-1">Habilidades <ChevronRight className="w-3 h-3 rotate-90" /></a>
              <a href="#experiencia" className="hover:text-black transition-colors">Experiencia</a>
              <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contacto" className="hidden md:flex bg-[#111] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black transition-all items-center gap-2">
              Contratarme <Mail className="w-4 h-4" />
            </a>
            <button className="md:hidden text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
          <GalaxyTrail dark={false} />
          
          <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-sm font-medium text-gray-800">
              <Sparkles className="w-4 h-4 text-[#4285F4]" />
              Hola, soy Anderson Frias
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] lg:text-[6rem] font-medium tracking-tighter leading-[1.05] mb-8 text-[#111]">
              Construyo aplicaciones web modernas y escalables.
              {/* <br className="hidden md:block" />  */}
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-8">
              Desarrollador de Software especializado en React, Next.js y TypeScript.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
              <a href="#proyectos" className="bg-[#111] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black transition-all shadow-lg flex items-center gap-3">
                <Terminal className="w-5 h-5" /> Ver mi trabajo
              </a>
              <a href="#contacto" className="bg-white border border-gray-200 text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all">
                Trabajemos juntos
              </a>
            </div>
          </div>
        </section>

        {/* HABILIDADES (AGENTIC IDE STYLE) */}
        <section id="habilidades" className="py-32 px-6 bg-white relative">
          <div className="max-w-[1400px] mx-auto">
            {/* Fila de iconos circulares */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16">
              {[<Layout key="layout"/>, <Terminal key="terminal"/>, <Database key="database"/>, <Code2 key="code2"/>, <Github key="github"/>, <Sparkles key="sparkles"/>, <LayersIcon key="layers"/>].map((icon, i) => (
                <div key={i} className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#4285F4] hover:text-[#4285F4] transition-colors cursor-pointer bg-white shadow-sm hover:shadow-md transform hover:-translate-y-1 duration-200">
                  {React.cloneElement(icon as React.ReactElement<React.SVGProps<SVGSVGElement>>, { className: 'w-6 h-6' })}
                </div>
              ))}
            </div>

            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight text-[#111]">
                Especializado en construir arquitecturas robustas, interfaces intuitivas y sistemas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#EA4335]">escalables para la web</span>.
              </h2>
            </div>
          </div>
        </section>

        {/* PROYECTOS DESTACADOS (CODE WINDOW STYLE) */}
        <section className="py-32 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Código limpio,<br/>resultados reales.</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                Mi filosofía de desarrollo se basa en escribir código mantenible y eficiente. Utilizo las mejores prácticas del ecosistema moderno para asegurar que tu producto esté preparado para el crecimiento.
              </p>
            </div>
            
            {/* Ventana de Código simulada */}
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
                  <span className="text-purple-600">import</span> {'{'} Calidad, Rendimiento {'}'} <span className="text-purple-600">from</span> <span className="text-green-600">&apos;@best-practices/core&apos;</span>;<br/><br/>
                  <span className="text-purple-600">export default function</span> <span className="text-blue-600">EntregarProyecto</span>() {'{'}<br/>
                  &nbsp;&nbsp;<span className="text-purple-600">return</span> (<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-500">Producto</span> <span className="text-orange-500">escalable</span>=<span className="text-blue-600">{'{'}true{'}'}</span>&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-red-500">ExperienciaUsuario</span> <span className="text-orange-500">optimizada</span> /&gt;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-red-500">Producto</span>&gt;<br/>
                  &nbsp;&nbsp;);<br/>
                  {'}'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ÚLTIMOS PROYECTOS (LATEST BLOGS STYLE) */}
        <section id="proyectos" className="py-32 px-6 max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Trabajos Destacados</h2>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 font-medium hover:bg-gray-50 transition-colors">
              <Github className="w-4 h-4"/> Ver GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-[#0f0f11] rounded-[2rem] h-72 mb-6 overflow-hidden relative flex items-center justify-center">
                  {/* Imagen de fondo oscurecida estilo Antigravity */}
                  <div className="absolute inset-0 opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity duration-500">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Botón hover que aparece */}
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-3">
                    Ver repositorio <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-medium tracking-tight mb-2">{project.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">{project.tags.join(' • ')}</span>
                </div>
                <p className="text-gray-600 flex items-center gap-1 font-medium">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* DARK SECTION - CTA (DOWNLOAD LINUX STYLE) */}
        <section id="contacto" className="relative py-40 px-6 bg-[#000000] text-white overflow-hidden rounded-t-[3rem]">
          <GalaxyTrail dark={true} />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-start">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-tight mb-10">
              ¿Tienes una idea en mente?<br/>
              Hagámosla realidad.
            </h2>
            <a href="mailto:hola@ejemplo.com" className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-all flex items-center gap-3">
              <Mail className="w-5 h-5"/> Enviar mensaje
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER (EXPERIENCE LIFTOFF STYLE) */}
      <footer className="bg-white pt-24 pb-8 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-32">
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <h3 className="text-2xl font-medium tracking-tight">Listo para el próximo nivel.</h3>
            </div>
            <div className="flex flex-col gap-4 text-sm font-medium text-[#111]">
              <span className="text-gray-400 mb-2">Social</span>
              <a href="#" className="hover:text-gray-500">Github</a>
              <a href="#" className="hover:text-gray-500">LinkedIn</a>
              <a href="#" className="hover:text-gray-500">Twitter / X</a>
            </div>
            <div className="flex flex-col gap-4 text-sm font-medium text-[#111]">
              <span className="text-gray-400 mb-2">Navegación</span>
              <a href="#proyectos" className="hover:text-gray-500">Proyectos</a>
              <a href="#habilidades" className="hover:text-gray-500">Habilidades</a>
              <a href="#contacto" className="hover:text-gray-500">Contacto</a>
            </div>
          </div>

          {/* MASSIVE TEXT */}
          <div className="w-full flex justify-start mb-16 select-none pointer-events-none">
            <h1 className="text-[14vw] font-bold tracking-tighter text-[#111] leading-none">
              anderlfrias.
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-sm text-gray-500 font-medium">
            <div className="flex items-center gap-2 mb-4 md:mb-0 text-[#111]">
              <Sparkles className="w-5 h-5 text-[#4285F4]" />
              <span className="text-lg tracking-tight">anderlfrias</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-black">© {new Date().getFullYear()} Todos los derechos reservados.</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icono extra para imitar la fila de botones
function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
}