export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  technicalDecisions: string[];
  results: string[];
  tags: string[];
  image: string;
  gallery: string[];
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'gestion-academica-financiera',
    title: 'Sistema de gestión académica y financiera',
    description: 'Plataforma multisucursal para gestión de estudiantes, cursos, facturación y automatización de procesos administrativos.',
    tags: ['Next.js', 'Prisma', 'MySQL'],
    context: 'Sistema diseñado para la administración completa de una institución de cursos vocacionales con múltiples sucursales, incluyendo procesos académicos, financieros y operativos.',
    problem: 'La institución operaba con procesos fragmentados, dificultades en el control de pagos, generación lenta de reportes y falta de automatización en operaciones clave.',
    solution: 'Se desarrolló un sistema centralizado que integra gestión académica, facturación, pagos a profesores e inventario en una sola plataforma.',
    technicalDecisions: [
      'Arquitectura modular por dominios',
      'Modelado de base de datos para relaciones complejas',
      'Soporte multisucursal sin duplicación de lógica',
      'Optimización de consultas para reportes'
    ],
    results: [
      'Reducción en tiempos de generación de reportes',
      'Mejora en control financiero y operativo',
      'Disminución de errores manuales',
      'Base escalable para crecimiento'
    ],
    image: '/projects/gestion-academica/1.png',
    gallery: [
      '/projects/gestion-academica/1.png',
      '/projects/gestion-academica/2.png',
      '/projects/gestion-academica/3.png',
      '/projects/gestion-academica/4.png',
      '/projects/gestion-academica/5.png',
      '/projects/gestion-academica/6.png',
      '/projects/gestion-academica/7.png',
    ]
  },
  {
    id: '2',
    slug: 'sistema-clinico',
    title: 'Sistema de gestión clínica multiempresa',
    description: 'Software para manejo de expedientes clínicos, citas y procesos médicos con control de acceso por roles.',
    tags: ['React.js', 'Sails.js', 'MySQL'],
    context: 'Sistema orientado a consultorios médicos para gestionar expedientes clínicos, citas y procesos médicos en múltiples empresas.',
    problem: 'Dificultad para manejar información clínica estructurada, control de acceso limitado y procesos manuales en documentación médica.',
    solution: 'Se desarrolló una plataforma que centraliza la gestión clínica, mejora la organización de datos y permite control por roles.',
    technicalDecisions: [
      'Modelado de datos clínicos complejos',
      'Arquitectura multi-tenant',
      'Control de acceso por roles',
      'Separación de dominios'
    ],
    results: [
      'Mejora en acceso y organización de información',
      'Reducción del tiempo de documentación médica',
      'Mayor control de seguridad en datos sensibles'
    ],
    image: '/projects/sistema-clinico/1.png',
    gallery: [
      '/projects/sistema-clinico/1.png',
      '/projects/sistema-clinico/2.png',
      '/projects/sistema-clinico/3.png',
      '/projects/sistema-clinico/4.png',
      '/projects/sistema-clinico/5.png',
      '/projects/sistema-clinico/6.png',
    ]
  },
  {
    id: '3',
    slug: 'sistema-turnos',
    title: 'Sistema de gestión de turnos y monitoreo operativo',
    description: 'Sistema para gestionar el flujo de atención y medir métricas en tiempo real para optimizar procesos.',
    tags: ['Next.js', 'MongoDB', 'Mongoose'],
    context: 'Sistema para gestionar el flujo de atención al cliente y medir el rendimiento operativo en tiempo real.',
    problem: 'Falta de visibilidad sobre tiempos de atención, métricas inexistentes y dificultad para detectar cuellos de botella.',
    solution: 'Se implementó un sistema de seguimiento por estados con métricas detalladas por agente, área y servicio.',
    technicalDecisions: [
      'Modelado basado en eventos',
      'Cálculo eficiente de métricas en tiempo real',
      'Separación entre flujo y analítica',
      'Arquitectura escalable'
    ],
    results: [
      'Visibilidad completa del flujo de atención',
      'Identificación de cuellos de botella',
      'Mejora en toma de decisiones',
      'Optimización de tiempos de servicio'
    ],
    image: '/projects/kiu/1.png',
    gallery: [
      '/projects/kiu/1.png',
      '/projects/kiu/2.png',
      '/projects/kiu/3.png',
      '/projects/kiu/4.png',
      '/projects/kiu/5.png',
      '/projects/kiu/6.png',
      '/projects/kiu/7.png',
      '/projects/kiu/8.png',
      '/projects/kiu/9.png',
      '/projects/kiu/10.png',
    ]
  }
];
