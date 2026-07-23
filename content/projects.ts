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
      'División por módulos (académico, financiero, inventario), cada uno con sus propias reglas',
      'Modelo de datos pensado para relaciones multisucursal sin duplicar información',
      'Consultas optimizadas para que los reportes no dependieran de recalcular todo en cada solicitud'
    ],
    results: [
      'Reportes que antes se armaban a mano ahora se generan directamente desde el sistema',
      'Un solo punto de control para pagos, facturación e inventario en todas las sucursales',
      'Menos errores por captura manual de datos'
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
      'Modelo de datos clínico separado por empresa, sin mezclar información entre consultorios',
      'Control de acceso por roles para limitar quién puede ver cada expediente',
      'Estructura pensada para incorporar nuevas empresas sin modificar el código existente'
    ],
    results: [
      'Expedientes clínicos organizados y accesibles según el rol de cada usuario',
      'Menos tiempo dedicado a documentación manual',
      'Datos sensibles protegidos mediante control de acceso granular'
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
      'Cada cambio de estado se registra como evento, para reconstruir el flujo completo después',
      'Métricas calculadas por agente, área y servicio sin afectar el rendimiento del flujo en vivo',
      'Separación entre el sistema que atiende el flujo y el que genera los reportes'
    ],
    results: [
      'Visibilidad en tiempo real de dónde se generan los cuellos de botella',
      'Métricas por agente y por servicio que antes no existían',
      'Datos objetivos para decidir dónde reforzar personal o ajustar procesos'
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
      '/projects/kiu/11.png',
    ]
  }
];
