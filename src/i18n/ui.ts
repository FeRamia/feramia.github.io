import type { Lang } from '../data/profile';

export const languages: Record<Lang, string> = { es: 'Español', en: 'English' };

export const ui = {
  es: {
    'meta.title': 'Ferran Ramia — Ingeniero Informático · Full-Stack & Data Analyst',
    'meta.description':
      'Portfolio de Ferran Ramia, ingeniero informático en Castellón especializado en desarrollo full-stack (Angular, PHP, Node.js), análisis de datos (Python, Power BI) y cloud.',
    'nav.about': 'Sobre mí',
    'nav.expertise': 'Qué hago',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    //'hero.available': 'Abierto a nuevas oportunidades',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.cv': 'Descargar CV',
    'hero.cta.contact': 'Contactar',
    'stats.years': 'años de experiencia',
    'stats.master': 'Máster en IA',
    'stats.profile': 'Full-stack + datos',
    'about.title': 'Sobre mí',
    'about.languages': 'Idiomas',
    'about.location': 'Ubicación',
    'expertise.title': 'Qué puedo aportar',
    'expertise.subtitle': 'Un perfil que cubre todo el ciclo: construir el producto, desplegarlo y medir su impacto con datos.',
    'experience.title': 'Experiencia',
    'education.title': 'Formación',
    'skills.title': 'Stack tecnológico',
    'projects.title': 'Proyectos',
    'projects.subtitle': 'Una selección de proyectos personales y de GitHub.',
    'projects.filter.all': 'Todos',
    'projects.filter.fullstack': 'Full-Stack',
    'projects.filter.data': 'Datos',
    'projects.filter.ai': 'IA',
    'projects.filter.automation': 'Automatización',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.featured': 'Destacado',
    'contact.title': '¿Hablamos?',
    'contact.text':
      '¿Buscas a alguien que construya tu aplicación web, automatice tus procesos o saque partido a tus datos? Escríbeme y te respondo lo antes posible.',
    'contact.email': 'Enviar email',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.cookies': 'Preferencias de cookies',
    'theme.toggle': 'Cambiar tema claro/oscuro',
    'menu.toggle': 'Abrir menú',
    'cookies.text':
      'Uso Google Analytics para saber cuántas personas visitan la web y qué secciones les interesan. Solo se activa si lo aceptas.',
    'cookies.accept': 'Aceptar',
    'cookies.reject': 'Rechazar',
  },
  en: {
    'meta.title': 'Ferran Ramia — Software Engineer · Full-Stack & Data Analyst',
    'meta.description':
      'Portfolio of Ferran Ramia, a software engineer based in Castellón (Spain) specialised in full-stack development (Angular, PHP, Node.js), data analysis (Python, Power BI) and cloud.',
    'nav.about': 'About',
    'nav.expertise': 'What I do',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    //'hero.available': 'Open to new opportunities',
    'hero.cta.projects': 'See projects',
    'hero.cta.cv': 'Download CV',
    'hero.cta.contact': 'Get in touch',
    'stats.years': 'years of experience',
    'stats.master': 'MSc in AI',
    'stats.profile': 'Full-stack + data',
    'about.title': 'About me',
    'about.languages': 'Languages',
    'about.location': 'Location',
    'expertise.title': 'What I bring',
    'expertise.subtitle': 'A profile that covers the whole cycle: building the product, shipping it and measuring its impact with data.',
    'experience.title': 'Experience',
    'education.title': 'Education',
    'skills.title': 'Tech stack',
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of personal and GitHub projects.',
    'projects.filter.all': 'All',
    'projects.filter.fullstack': 'Full-Stack',
    'projects.filter.data': 'Data',
    'projects.filter.ai': 'AI',
    'projects.filter.automation': 'Automation',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.featured': 'Featured',
    'contact.title': 'Let’s talk',
    'contact.text':
      'Looking for someone to build your web app, automate your processes or get value out of your data? Drop me a line and I’ll get back to you soon.',
    'contact.email': 'Send email',
    'footer.rights': 'All rights reserved.',
    'footer.cookies': 'Cookie preferences',
    'theme.toggle': 'Toggle light/dark theme',
    'menu.toggle': 'Open menu',
    'cookies.text':
      'I use Google Analytics to understand how many people visit this site and which sections they find useful. It is only enabled if you accept.',
    'cookies.accept': 'Accept',
    'cookies.reject': 'Reject',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui.es[key];
}

export const localePath = (lang: Lang) => (lang === 'es' ? '/' : '/en/');
