export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
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
