// Proyectos mostrados en la sección "Proyectos".
// Para añadir uno: copia un objeto, rellena los campos y guarda. El orden del array es el orden en la web.
// También puedes pedírselo a Claude Code con el subagente "project-curator".
import type { Localized } from './profile';

export type ProjectCategory = 'fullstack' | 'data' | 'ai' | 'automation';

export interface Project {
  title: string;
  description: Localized;
  category: ProjectCategory;
  tags: string[];
  repo?: string;          // URL del repositorio en GitHub (opcional)
  demo?: string;          // URL de la demo en vivo (opcional)
  image?: string;         // ruta en /public, p. ej. '/projects/mi-proyecto.png' (opcional)
  featured?: boolean;     // destacado: ocupa más espacio y aparece primero
}

// TODO: sustituye estos ejemplos por tus proyectos reales.
export const projects: Project[] = [
  {
    title: 'Proyecto Full-Stack de ejemplo',
    description: {
      es: 'Aplicación web con Angular y API REST en Node.js/PHP sobre PostgreSQL, desplegada con Docker en Google Cloud. Sustituye este texto por la descripción de tu proyecto: qué problema resuelve y qué impacto tuvo.',
      en: 'Web app with Angular and a Node.js/PHP REST API on PostgreSQL, deployed with Docker on Google Cloud. Replace this text with your project: what problem it solves and the impact it had.',
    },
    category: 'fullstack',
    tags: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'GCP'],
  },
  {
    title: 'Simulación Castellón — Analítica',
    description: {
      es: 'Simulación Monte Carlo de una liga de fútbol para estimar la clasificación final y las probabilidades de cada equipo. Motor en Python con DuckDB y visualización de escenarios en Power BI.',
      en: 'Monte Carlo simulation of a football league to estimate the final standings and each team’s odds. Python engine with DuckDB and scenario dashboards in Power BI.',
    },
    category: 'data',
    tags: ['Python', 'DuckDB', 'Monte Carlo', 'Power BI'],
    // repo: 'https://github.com/FeRamia/NOMBRE-DEL-REPO',
    featured: true,
  },
  {
    title: 'Proyecto de IA de ejemplo',
    description: {
      es: 'Modelo de machine learning aplicado a un problema real (predicción, clasificación…). Explica el enfoque, los datos y los resultados obtenidos.',
      en: 'Machine learning model applied to a real problem (forecasting, classification…). Explain the approach, the data and the results.',
    },
    category: 'ai',
    tags: ['Python', 'scikit-learn', 'Pandas'],
  },
  {
    title: 'Automatización de ejemplo',
    description: {
      es: 'Scripts en Python que automatizan un proceso repetitivo. Indica cuánto tiempo o cuántos errores ahorra.',
      en: 'Python scripts that automate a repetitive process. State how much time or how many errors it saves.',
    },
    category: 'automation',
    tags: ['Python', 'Automation'],
  },
];
