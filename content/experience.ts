export interface ExperienceMetric {
  value: string;
  label: string;
  iconName: 'Terminal' | 'Database';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description?: string;
  highlights: string[];
  techStack: string[];
}

export const EXPERIENCE_CONTENT = {
  badge: "Trayectoria",
  title: "Experiencia construyendo software real.",
  subtitle: "Desde 2021 creo soluciones de software empresarial de alto impacto. Lidero decisiones técnicas en el sector salud y desarrollo proyectos independientes para diversas industrias.",
  metrics: [
    {
      value: "4+ años",
      label: "Desarrollando software profesional",
      iconName: "Terminal",
    },
    {
      value: "8+",
      label: "Sistemas empresariales en producción",
      iconName: "Database",
    },
  ] as ExperienceMetric[],
  experiences: [
    {
      id: "siglo-21",
      company: "Centro Médico Docente Siglo 21",
      role: "Software Engineer · Technical Lead",
      period: "2021 — Actualidad",
      isCurrent: true,
      type: "Jornada Completa",
      highlights: [
        "Diseñé y desarrollé una plataforma integral de facturación, inventario y contabilidad utilizada en producción, eliminando dependencia de software externo y reduciendo costos operativos.",
        "Implementé sistemas internos para gestión de servicios médicos a domicilio, integrando operaciones, facturación y métricas de negocio en tiempo real.",
        "Diseñé APIs REST para integración entre múltiples sistemas, mejorando consistencia de datos y reduciendo latencia entre aplicaciones.",
        "Lideré decisiones técnicas y coordinación del equipo de desarrollo, definiendo arquitectura, estándares de código y pipelines de despliegue.",
      ],
      techStack: ["Next.js", "React", "Node.js", "MySQL", "Linux", "PM2", "REST APIs"],
    },
    {
      id: "independent",
      company: "Proyectos Independientes",
      role: "Freelance Software Architect & Engineer",
      period: "2022 — Actualidad",
      isCurrent: true,
      type: "Proyectos a Medida",
      highlights: [
        "Sistema de gestión académica y financiera multi-sucursal para instituciones educativas.",
        "Plataforma de gestión clínica multiempresa para consultorios médicos especializados.",
        "Sistema de turnos y monitoreo operativo para medición e hipervisibilidad de tiempos de atención en tiempo real.",
        "Levantamiento de requerimientos, diseño de arquitectura de BD y despliegue directamente con clientes finales.",
      ],
      techStack: ["Next.js", "React", "Express", "Sails.js", "MongoDB", "PostgreSQL", "TailwindCSS"],
    },
  ] as ExperienceItem[],
};
