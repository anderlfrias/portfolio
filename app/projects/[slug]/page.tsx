import { PROJECTS } from '@/content/projects';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/sections/Footer';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-main text-text-main font-sans selection:bg-blue-base selection:text-text-main flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-[1000px] mx-auto px-6 py-32 w-full">
        <Link 
          href="/#proyectos" 
          className="inline-flex items-center gap-2 text-text-disabled hover:text-text-main mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a proyectos
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-balance">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="font-mono text-sm bg-surface px-3 py-1 rounded text-text-sec">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#0F172A] rounded-[2rem] h-[400px] mb-16 overflow-hidden w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
        </div>

        <section className="space-y-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xl font-medium text-text-main">Contexto</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-text-sec leading-relaxed text-lg">{project.context}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xl font-medium text-text-main">El Problema</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-text-sec leading-relaxed text-lg">{project.problem}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xl font-medium text-text-main">La Solución</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-text-sec leading-relaxed text-lg">{project.solution}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 pt-8 border-t border-surface">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-medium text-text-main mb-6">Decisiones Técnicas</h2>
                <ul className="space-y-4">
                  {project.technicalDecisions.map((decision, i) => (
                    <li key={i} className="flex gap-3 text-text-sec text-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-medium text-text-main mb-6">Resultados</h2>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-3 text-text-sec text-lg">
                      <CheckCircle2 className="w-6 h-6 text-green-accent shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-surface">
            <h2 className="text-3xl font-medium text-text-main mb-10">Imágenes del proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="bg-surface rounded-2xl h-[300px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
