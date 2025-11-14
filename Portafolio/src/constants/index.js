import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  redux,
  tailwind,
  farmacia,
  nodejs,
  mongodb,
  git,
  figma,
  CashWin,
  docker,
  arduino,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  senacloud,
  Cham,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre Mí",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contacteme",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IA Developer",
    company_name: "Proyectos Personales",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Noviembre 2024 - Process",
    points: [
      "Desarrollando y manteniendo IAs utilizando Transformers,  y otras tecnologías relacionadas.",
      "Creando redes neuronales desde 0",
      "Manteniendo y Desarrollando Prototipos Competentes para Chatbot, Images IA, CodeIA",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Playapez",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Octubre 2024 - Process",
    points: [
      "Desarrollando y manteniendo aplicaciones Movil utilizando Flutter y otras tecnologías relacionadas.",
      "Colaborando con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementando diseño responsivo y asegurando la compatibilidad entre dispositivos.",
      "Participando en revisiones de código y brindando retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Proyecto Personales",
    icon: shopify,
    iconBg: "#383E56",
    date: "Process",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborando con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementando diseño responsivo y asegurando la compatibilidad entre navegadores.",
      "Participando en revisiones de código y brindando retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "SENA",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Process",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
      "Colaborando con equipos multifuncionales incluyendo diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementando diseño responsivo y asegurando la compatibilidad entre navegadores.",
      "Participando en revisiones de código y brindando retroalimentación constructiva a otros desarrolladores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Creí que era imposible hacer un sitio web tan hermoso como nuestro producto, pero Rick me demostró lo contrario.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca he conocido a un desarrollador web que se preocupe verdaderamente por el éxito de sus clientes como lo hace Rick.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Después de que Rick optimizó nuestro sitio web, nuestro tráfico aumentó un 50%. ¡No podemos agradecerles lo suficiente!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SENA Cloud",
    description:
      "SENA Cloud es una aplicación web integral diseñada para optimizar la organización académica y administrativa mediante un sistema intuitivo que permite a instructores, administradores y superadministradores coordinar eficientemente sus responsabilidades.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }, 
    ],
    image: senacloud,
    source_code_link: "https://github.com/DevCat-HGS/SenaCloud",
    live_demo_link: "https://senacloud.netlify.app/",
  },
  {
    name: "Chaman Tarrot Dashboard",
    description:
      "Dashboard inteligente para servicios de tarot que utiliza IA para generar predicciones personalizadas. Integración completa con Make para automatización de procesos y Supabase para gestión de datos. Sistema automatizado para lecturas de tarot con análisis predictivo.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "IA",
        color: "purple-text-gradient",
      },
      {
        name: "Make",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "orange-text-gradient",
      },
      {
        name: "Automatización",
        color: "pink-text-gradient",
      },
    ],
    image: Cham,
    source_code_link: "https://github.com/DevCat-HGS/chaman-web-dashboard",
    live_demo_link: "https://www.preguntalealchaman.com",
  },
  {
    name: "CashWin",
    description:
      "Videojuego de apuestas multiplataforma desarrollado en Unity con C#. Implementa sistema de multijugador mediante Photon Pun 2, integración con pasarela de pago MercadoPago. Basado en el juego tradicional de dados con mecánicas de apuestas en tiempo real.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Photon Pun 2",
        color: "purple-text-gradient",
      },
      {
        name: "MercadoPago",
        color: "orange-text-gradient",
      },
      {
        name: "Multiplayer",
        color: "pink-text-gradient",
      },
    ],
    image: CashWin,
    source_code_link: "https://github.com/DevCat-HGS/UnityCW",
    live_demo_link: "https://github.com/DevCat-HGS/UnityCW",
  },
  {
    name: "SensoresAPP",
    description:
      "Proyecto educativo realizado en Arduino para la prevención de inundaciones en pueblos cercanos. Sistema de advertencias tempranas que monitorea niveles de agua y condiciones ambientales para alertar a comunidades sobre riesgos de inundación.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Sensores",
        color: "purple-text-gradient",
      },
      {
        name: "IoT",
        color: "orange-text-gradient",
      },
      {
        name: "Educación",
        color: "pink-text-gradient",
      },
    ],
    image: arduino,
    source_code_link: "https://github.com/DevCat-HGS/SensoresAPP",
    live_demo_link: "https://github.com/DevCat-HGS/SensoresAPP",
  },
  {
    name: "Farmacia Admin",
    description:
      "Sistema de administración y bodega para farmacias desarrollado a escala privada. Gestión completa de inventario de medicamentos, control de stock, ventas y reportes. Implementa autenticación segura y panel de administración para farmacéuticos.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Privado",
        color: "purple-text-gradient",
      },
      {
        name: "Inventario",
        color: "orange-text-gradient",
      },
    ],
    image: farmacia,
    source_code_link: "https://github.com/DevCat-HGS/Farmacia-Admin",
    live_demo_link: "https://github.com/DevCat-HGS/Farmacia-Admin",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
