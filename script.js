const i18n = {
  es: {
    "nav.about": "Sobre mí",
    "nav.profile": "Perfil",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Junior Full Stack Developer",
    "hero.title": "Construyo productos digitales y automatizaciones claras, funcionales y escalables.",
    "hero.description": "Desarrollo aplicaciones Full Stack con enfoque en rendimiento, automatización y experiencia de usuario.",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaContact": "Contactarme",
    "about.title": "Sobre mí",
    "about.text1": "Soy desarrollador junior enfocado en el stack MEAN/MERN, con experiencia construyendo productos reales y desplegándolos en producción.",
    "about.text2": "Me especializo en backend con Node.js y Express, integración de APIs, y automatización de procesos con n8n y Docker.",
    "profile.title": "Perfil académico e idiomas",
    "profile.language.title": "Idioma",
    "profile.language.text": "Inglés B2.",
    "profile.education.title": "Estudio",
    "profile.education.text": "Instituto Tecnológico de Aguascalientes · Status: actualmente · Ingresé en 2023.",
    "experience.title": "Experiencia",
    "experience.item1.title": "Inadaptados Program",
    "experience.item1.text": "Perfeccionamiento técnico en MEAN/MERN, arquitectura escalable y buenas prácticas de desarrollo Full Stack.",
    "experience.item2.title": "Informatic-Help-Agency",
    "experience.item2.text": "Participación en procesos de automatización para optimizar operación interna, reducir tareas manuales y acelerar tiempos de respuesta.",
    "experience.item3.title": "App de registros biométricos (checkadores)",
    "experience.item3.text": "Implementación de una solución de registros biométricos usando SDK de Identity.io para validación de identidad y control de asistencias.",
    "skills.title": "Habilidades",
    "skills.group1.title": "Desarrollo Web",
    "skills.group2.title": "IA Generativa",
    "skills.group3.title": "Herramientas de Desarrollo y DevOps",
    "projects.title": "Proyectos relevantes",
    "projects.item1": "Plataforma e-commerce con estructura robusta de frontend y backend para operaciones reales.",
    "projects.item2": "Plataforma integral para la gestión de identidad digital y procesos asociados.",
    "projects.item3": "Proyectos experimentales enfocados en interfaces innovadoras y lógica avanzada.",
    "projects.item4": "Automatización de eventos de calendario con Node.js y PM2 para flujos académicos.",
    "contact.title": "Contacto",
    "contact.subtitle": "Disponible para oportunidades junior Full Stack y proyectos freelance."
  },
  en: {
    "nav.about": "About",
    "nav.profile": "Profile",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Junior Full Stack Developer",
    "hero.title": "I build clear, functional, and scalable digital products and automations.",
    "hero.description": "I develop Full Stack applications focused on performance, automation, and user experience.",
    "hero.ctaProjects": "View projects",
    "hero.ctaContact": "Get in touch",
    "about.title": "About",
    "about.text1": "I am a junior developer focused on the MEAN/MERN stack, with experience building real products and deploying them to production.",
    "about.text2": "I specialize in Node.js and Express backend development, API integrations, and process automation with n8n and Docker.",
    "profile.title": "Academic profile and languages",
    "profile.language.title": "Language",
    "profile.language.text": "English B2.",
    "profile.education.title": "Education",
    "profile.education.text": "Instituto Tecnologico de Aguascalientes · Status: currently enrolled · Started in 2023.",
    "experience.title": "Experience",
    "experience.item1.title": "Inadaptados Program",
    "experience.item1.text": "Technical upskilling in MEAN/MERN, scalable architecture, and Full Stack development best practices.",
    "experience.item2.title": "Informatic-Help-Agency",
    "experience.item2.text": "Contributed to automation processes to optimize internal operations, reduce manual tasks, and improve response times.",
    "experience.item3.title": "Biometric records app (check-in system)",
    "experience.item3.text": "Implemented a biometric records solution using the Identity.io SDK for identity validation and attendance control.",
    "skills.title": "Skills",
    "skills.group1.title": "Web Development",
    "skills.group2.title": "Generative AI",
    "skills.group3.title": "Development & DevOps Tools",
    "projects.title": "Relevant projects",
    "projects.item1": "E-commerce platform with robust frontend and backend architecture for real-world operations.",
    "projects.item2": "Comprehensive platform for digital identity management and related workflows.",
    "projects.item3": "Experimental projects focused on innovative interfaces and advanced logic.",
    "projects.item4": "Calendar event automation with Node.js and PM2 for academic workflows.",
    "contact.title": "Contact",
    "contact.subtitle": "Available for junior Full Stack opportunities and freelance projects."
  }
};

const toggleBtn = document.getElementById("lang-toggle");
const markerEs = document.getElementById("lang-es");
const markerEn = document.getElementById("lang-en");
const translatableElements = document.querySelectorAll("[data-i18n]");

function applyLanguage(lang) {
  const dictionary = i18n[lang] || i18n.es;

  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = lang;
  markerEs.classList.toggle("active", lang === "es");
  markerEn.classList.toggle("active", lang === "en");
  localStorage.setItem("portfolio-lang", lang);
}

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.lang === "en" ? "en" : "es";
  applyLanguage(current === "es" ? "en" : "es");
});

const savedLang = localStorage.getItem("portfolio-lang");
applyLanguage(savedLang === "en" ? "en" : "es");

document.getElementById("year").textContent = new Date().getFullYear();
