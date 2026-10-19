// Contenido del perfil, extraído del CV (CV-FerranRamia_25.pdf).
// Todo texto visible va en los dos idiomas: { es, en }.

export type Lang = 'es' | 'en';
export type Localized = Record<Lang, string>;

const START_YEAR = 2020;
export const yearsOfExperience = new Date().getFullYear() - START_YEAR;

export const profile = {
  name: 'Ferran Ramia Tena',
  shortName: 'Ferran Ramia',
  photo: '/foto.jpg',
  // CV descargable oculto de momento. Para mostrarlo: copia el PDF a public/ y pon aquí '/CV-FerranRamia.pdf'.
  cv: null as string | null,
  location: { es: 'Castellón de la Plana, España', en: 'Castellón de la Plana, Spain' } as Localized,
  role: { es: 'Ingeniero Informático', en: 'Software Engineer' } as Localized,
  headline: {
    es: 'Full-Stack Developer & Data Analyst',
    en: 'Full-Stack Developer & Data Analyst',
  } as Localized,
  tagline: {
    es: 'Transformo ideas y datos en aplicaciones web robustas y en decisiones de negocio mejor informadas.',
    en: 'I turn ideas and data into robust web applications and better-informed business decisions.',
  } as Localized,

  // TODO: sustituye por tus URLs reales.
  contact: {
    email: 'ferrytena98@gmail.com', // solo se usa en el botón "Enviar email" (mailto), no se muestra como texto
    linkedin: 'https://www.linkedin.com/in/ferran-ramia-tena-a6b66911b/',
    github: 'https://github.com/FeRamia',
  },

  about: {
    es: [
      `Soy ingeniero informático con más de ${yearsOfExperience} años de experiencia construyendo software de principio a fin: desde la toma de requisitos con negocio hasta el despliegue en la nube y el análisis de los datos que genera.`,
      'Mi perfil combina dos mundos que rara vez van juntos: el desarrollo full-stack (Angular, PHP, Node.js, SQL) y el análisis de datos (Python, ETL, Power BI). Eso me permite no solo construir la herramienta, sino también medir su impacto y convertir la información en decisiones.',
      'Completé el Máster Oficial en Inteligencia Artificial, y me apasiona incorporar nuevas tecnologías para automatizar procesos, ganar productividad y escribir código mantenible y escalable.',
    ],
    en: [
      `I am a software engineer with over ${yearsOfExperience} years of experience building software end to end: from gathering requirements with the business to cloud deployment and analysing the data it produces.`,
      'My profile combines two worlds that rarely go together: full-stack development (Angular, PHP, Node.js, SQL) and data analysis (Python, ETL, Power BI). This lets me not only build the tool, but also measure its impact and turn information into decisions.',
      'I hold an Official Master’s Degree in Artificial Intelligence, and I love bringing in new technologies to automate processes, boost productivity and write maintainable, scalable code.',
    ],
  } as Record<Lang, string[]>,

  // Lo que aporto: tarjetas de "servicios / áreas de especialización".
  expertise: [
    {
      icon: 'code',
      title: { es: 'Desarrollo Full-Stack', en: 'Full-Stack Development' },
      text: {
        es: 'Aplicaciones web robustas y escalables con Angular en el frontend y PHP / Node.js y APIs RESTful en el backend.',
        en: 'Robust, scalable web applications with Angular on the frontend and PHP / Node.js and RESTful APIs on the backend.',
      },
    },
    {
      icon: 'chart',
      title: { es: 'Análisis y visualización de datos', en: 'Data Analysis & Visualisation' },
      text: {
        es: 'Dashboards interactivos en Power BI e informes que facilitan la toma de decisiones basada en datos.',
        en: 'Interactive Power BI dashboards and reports that enable data-driven decision making.',
      },
    },
    {
      icon: 'bolt',
      title: { es: 'Automatización y ETL', en: 'Automation & ETL' },
      text: {
        es: 'Scripts y pipelines en Python que eliminan tareas manuales y procesan datos de forma fiable.',
        en: 'Python scripts and pipelines that remove manual work and process data reliably.',
      },
    },
    {
      icon: 'cloud',
      title: { es: 'Cloud e infraestructura', en: 'Cloud & Infrastructure' },
      text: {
        es: 'Servidores, contenedores Docker, CI/CD y despliegues escalables en Google Cloud Platform y Azure.',
        en: 'Servers, Docker containers, CI/CD and scalable deployments on Google Cloud Platform and Azure.',
      },
    },
    {
      icon: 'db',
      title: { es: 'Bases de datos', en: 'Databases' },
      text: {
        es: 'Diseño, gestión y optimización de bases de datos SQL (PostgreSQL) y NoSQL (MongoDB) orientadas al rendimiento.',
        en: 'Design, management and optimisation of SQL (PostgreSQL) and NoSQL (MongoDB) databases built for performance.',
      },
    },
    {
      icon: 'flag',
      title: { es: 'Gestión de proyectos', en: 'Project Management' },
      text: {
        es: 'Lidero proyectos de la toma de requisitos a la entrega, con enfoque ágil y orientado a resultados de negocio.',
        en: 'I lead projects from requirements to delivery with an agile, business-outcome-driven approach.',
      },
    },
  ] as { icon: string; title: Localized; text: Localized }[],

  experience: [
    {
      company: 'Grupo Simetría',
      role: { es: 'Técnico de Innovación y Nuevas Tecnologías', en: 'Innovation & New Technologies Engineer' },
      period: { es: 'Feb 2020 – Actualidad', en: 'Feb 2020 – Present' },
      location: { es: 'Castellón de la Plana', en: 'Castellón de la Plana, Spain' },
      bullets: {
        es: [
          '<strong>Desarrollo full-stack:</strong> aplicaciones web robustas y escalables con Angular y PHP.',
          '<strong>Bases de datos:</strong> diseño, gestión y optimización de SQL para un rendimiento excepcional.',
          '<strong>Infraestructura y cloud:</strong> implantación de servidores, despliegue con Docker y soluciones escalables en Google Cloud Platform.',
          '<strong>Gestión de proyectos:</strong> de la toma de requisitos a la entrega, con enfoque ágil y orientado a resultados.',
          '<strong>Automatización y ETL:</strong> scripts en Python para optimizar flujos de trabajo y procesar datos.',
          '<strong>Análisis de datos:</strong> dashboards interactivos en Power BI para la toma de decisiones.',
        ],
        en: [
          '<strong>Full-stack development:</strong> robust, scalable web applications with Angular and PHP.',
          '<strong>Databases:</strong> SQL design, management and optimisation for outstanding performance.',
          '<strong>Infrastructure & cloud:</strong> server setup, Docker deployments and scalable solutions on Google Cloud Platform.',
          '<strong>Project management:</strong> from requirements gathering to delivery, with an agile, results-driven approach.',
          '<strong>Automation & ETL:</strong> Python scripts that streamline workflows and process data.',
          '<strong>Data analysis:</strong> interactive Power BI dashboards to support decision making.',
        ],
      },
    },
  ] as { company: string; role: Localized; period: Localized; location: Localized; bullets: Record<Lang, string[]> }[],

  education: [
    {
      title: { es: 'Máster Oficial en Inteligencia Artificial', en: 'Official Master’s Degree in Artificial Intelligence' },
      school: 'Universidad Internacional de Valencia (VIU)',
      period: { es: 'Abr 2022 – Mar 2023', en: 'Apr 2022 – Mar 2023' },
    },
    {
      title: { es: 'Grado en Ingeniería Informática', en: 'BSc in Computer Engineering' },
      school: 'Universitat Jaume I',
      period: { es: 'Sep 2016 – Jul 2020', en: 'Sep 2016 – Jul 2020' },
    },
  ] as { title: Localized; school: string; period: Localized }[],

  skills: [
    { group: { es: 'Lenguajes', en: 'Languages' }, items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL'] },
    { group: { es: 'Frontend', en: 'Frontend' }, items: ['Angular', 'HTML', 'CSS'] },
    { group: { es: 'Backend', en: 'Backend' }, items: ['Node.js', 'PHP', 'APIs RESTful'] },
    { group: { es: 'Bases de datos', en: 'Databases' }, items: ['PostgreSQL', 'SQL', 'MongoDB'] },
    { group: { es: 'Datos e IA', en: 'Data & AI' }, items: ['Power BI', 'Python (ETL)', 'Machine Learning'] },
    { group: { es: 'DevOps y cloud', en: 'DevOps & Cloud' }, items: ['Docker', 'Git / GitHub', 'CI/CD', 'Azure DevOps', 'Google Cloud', 'Azure'] },
  ] as { group: Localized; items: string[] }[],

  languages: [
    { name: { es: 'Valenciano', en: 'Valencian' }, level: { es: 'Nativo (C1)', en: 'Native (C1)' } },
    { name: { es: 'Castellano', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'Intermedio (B2)', en: 'Upper-intermediate (B2)' } },
  ] as { name: Localized; level: Localized }[],
};
