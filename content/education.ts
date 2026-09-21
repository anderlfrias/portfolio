export interface DegreeItem {
  title: string;
  institution: string;
  period: string;
  status?: string;
  isCurrent?: boolean;
  description?: string;
  tag?: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
  year: string;
  category?: string;
  verified?: boolean;
}

export const EDUCATION_CONTENT = {
  badge: "Formación",
  title: "Formación académica y certificaciones.",
  subtitle: "Bases teóricas sólidas en ciencias de la computación combinadas con aprendizaje continuo y certificaciones en desarrollo y agilidad.",
  degrees: [
    {
      title: "Licenciatura en Informática",
      status: "En curso",
      isCurrent: true,
      institution: "Universidad Autónoma de Santo Domingo (UASD)",
      period: "2024 — Presente",
      tag: "Educación Superior",
      description: "Enfoque en arquitectura de software, bases de datos avanzadas, estructuras de datos y teoría de la computación.",
    },
    {
      title: "Tecnólogo en Desarrollo de Software",
      institution: "Instituto Tecnológico de Las Américas (ITLA)",
      period: "2019 — 2023",
      tag: "Educación Técnica Superior",
      description: "Formación práctica intensiva en desarrollo web, análisis de sistemas, bases de datos relacionales y NoSQL, e ingeniería de software.",
    },
    {
      title: "Técnico en Informática",
      institution: "Liceo Técnico Profesional Agustín Bonilla",
      period: "2015 — 2019",
      tag: "Bachillerato Técnico",
      description: "Fundamentos de programación, mantenimiento de hardware, redes de computadoras y soporte informático.",
    },
  ] as DegreeItem[],
  courses: [
    {
      name: "Scrum Master & Agilidad",
      provider: "CertiProf",
      year: "2022",
      category: "Metodologías Ágiles",
      verified: true,
    },
    {
      name: "Ciencia de Datos & Analytics",
      provider: "Talento Digital",
      year: "2026",
      category: "Data & Machine Learning",
      verified: true,
    },
    {
      name: "Fundamentos de Python & Backend",
      provider: "Platzi",
      year: "2024",
      category: "Lenguajes de Programación",
      verified: true,
    },
  ] as CertificationItem[],
};

