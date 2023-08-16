import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  angular,
  java,
  ngrx,
  rxjs,
  bootstrap,
  springboot,
  kotlin,
  nestjs,
  mysql,
  postgre,
  grupomont,
  uptbal,
  itnoroeste,
  jacidi,
  bekesantos,
  rmsolutions,
  carrent,
  jobit,
  tripguide,
  financesapp,
  musicplayer,
  sellsystem
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creador de contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Developer",
    company_name: "Proyectos y construservicios GRUPOMONT GMP C.A.",
    icon: grupomont,
    iconBg: "#383E56",
    date: "Nov. 2015 - Abr. 2018",
    points: [
      "Desarrollo de un sistema de control de facturas, presupuestos e inventario de repuestos y servicios en Java SE y MySQL.",
    ],
  },
  {
    title: "Ayudante de Soporte Técnico",
    company_name: "Universidad Politécnica Territorial de Barlovento “Argelia Laya”",
    icon: uptbal,
    iconBg: "#E6DEDD",
    date: "Ene. 2017 - Mar. 2017",
    points: [
      "Instalación de sistemas operativos Linux (Canaima) y Windows 7.",
      "Instalación de Cableado estructurado en departamentos.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "ITNoroeste",
    icon: itnoroeste,
    iconBg: "#383E56",
    date: "Nov. 2017 - Sep. 2020",
    points: [
      "Desarrollo de nuevos módulos para una aplicación de gestión de socios usando el framework Struts 2.",
      "Desarrollo de una aplicación web para facilitar el acceso a los socios de un club a su información personal usando la herramienta JHipster(Spring Boot y Angular).",
      "Responsabilidades:",
      "Crear nuevos módulos",
      "Crear reportes usando la herramienta JasperReport",
      "Crear nuevos campos y hacer cambios en la Base de Datos",
      "Resolver errores en las aplicaciones.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Jacidi",
    icon: jacidi,
    iconBg: "#383E56",
    date: "Oct. 2020 - May. 2021",
    points: [
      "Estructuración y desarrollo de sistema de Hotelería usando Spring Boot y Angular.",
      "Responsabilidades:",
      "Crear estructura de base de datos a partir de Mockflow.",
      "Usar la herramienta JHipster para crear base del sistema(Backend).",
      "Crear componentes y vistas en Angular basadas en el Mockflow y diseño planteado en Adobe XD.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Bekesantos",
    icon: bekesantos,
    iconBg: "#E6DEDD",
    date: "May. 2021 - Jul. 2023",
    points: [
      "Cliente BBVA Provincial Venezuela",
      "Responsabilidades:",
      "Mantenimiento y creación de nuevos módulos para sistema de administración de gestores usando las herramientas Spring Boot y Angular, BD PostgreSQL.",
      "Mantenimiento de sistema de gestion de Reclamos usando las herramientas Spring MVC y html, css, javascript.",
      "Creación de módulos para un sistema de gestión de accionistas usando Java web, con Servlets y jsp.",
      "Cliente Andromeda Ventures:",
      "Creación de nuevos módulos para Web PWA de asistencia medica remota, tecnologías usadas: Angular, Typescript, HTML y SCSS",
      "Responsabilidades:",
      "Crear componentes de calidad basados en lo propuesto en Figma.",
      "Seguir buenos estándares para el desarrollo del sistema.",
      "Arreglar bugs que hayan surgido.",
      "Dar un informe de mi progreso.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "RM Solutions",
    icon: rmsolutions,
    iconBg: "#E6DEDD",
    date: "Nov. 2022 - Mar. 2023",
    points: [
      "Cliente: Maximo Apps",
      "Responsabilidades:",
      "Desarrollo de nuevos modulos para un sistema de gestion de ubicaciones de automoviles y campañas publicitarias, bases de datos MySQL y MongoDB, Backend node.js usando el framework NestJS, Frontend Angular.",
      "Mantenimiento de sistema de gestion de Reclamos usando las herramientas Spring MVC y html, css, javascript.",
      "Realizar los cambios requeridos a partir de requerimientos.",
      "Respaldar y testear las bases de datos y ejecutar queries requeridas.",
      "Crear nuevos modulos tanto del frontend como del backend y testearlos.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pensé que era imposible hacer un sitio web tan hermoso como nuestro producto, pero Alejandro me demostró que estaba equivocado.",
    name: "Juana Martinez",
    designation: "CFO",
    company: "WDS Solutions",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca he conocido a un desarrollador web que realmente se preocupe por el éxito de sus clientes como lo hace Alejandro.",
    name: "Francisco Lopez",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Después de que Alejandro optimizó nuestro sitio web, nuestro tráfico aumentó en un 50%. ¡No podemos agradecerles lo suficiente!",
    name: "Angelica Perez",
    designation: "CTO",
    company: "WWC Enterprise",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "App de Finanzas Personales",
    description:
      "App Android para gestionar gastos y presupuestos mensuales con la funcion de leer totales de una factura usando la camara.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
    ],
    image: financesapp,
    source_code_link: "https://play.google.com/store/apps/details?id=com.alejcyber.finanzas",
  },
  {
    name: "Reproductor de musica",
    description:
      "Aplicacion web hecha en Angular para reproducir una lista de canciones y mostrar informacion referente a la pista",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "music",
        color: "pink-text-gradient",
      },
    ],
    image: musicplayer,
    source_code_link: "https://github.com/Alejcyber/music-player",
  },
  {
    name: "Tienda online",
    description:
      "Sistema de ventas hecho en Java, Spring Boot y Thymeleaf, permite registrar categorias, productos y ver las ventas realizadas, tambien llevar el control de las ventas realizadas .",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "thymeleaf",
        color: "pink-text-gradient",
      },
    ],
    image: sellsystem,
    source_code_link: "https://github.com/Alejcyber/sells-system",
  },
];

export { services, technologies, experiences, testimonials, projects };
