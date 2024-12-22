const ui = {
  "en": {
    "site.title": {
      text: "Himanshu Gupta"
    },
    "site.description": {
      text: "A minimalist blog theme built with Astro. A quick and easy starter build for anyone who wants to start their own blog."
    },
    "profile.description": {
      text: "your bio description"
    },
    "blog.lastUpdated": {
      text: "Last updated:"
    },
    "sidebar.tableOfContents": {
      text: "Table of Contents"
    },
    "project.platform": {
      text: "PLATFORM"
    },
    "project.stack": {
      text: "STACK"
    },
    "project.website": {
      text: "WEBSITE"
    }
  },
  "es": {
    "site.title": {
      text: "Astro Theme Cody"
    },
    "site.description": {
      text: "Un tema de blog minimalista creado con Astro. Un tema de inicio rápido y sencillo para cualquiera que quiera crear su propio blog."
    },
    "profile.description": {
      text: "tu descripción biográfica"
    },
    "blog.lastUpdated": {
      text: "Última actualización:"
    },
    "sidebar.tableOfContents": {
      text: "Tabla de contenidos"
    },
    "project.platform": {
      text: "PLATAFORMA"
    },
    "project.stack": {
      text: "PILA"
    },
    "project.website": {
      text: "WEBSITE"
    }
  }
};

const SUPPORTED_LANGUAGES = {
  "en": "en",
  "es": "es"
};
const DEFAULT_LANG = SUPPORTED_LANGUAGES.en;
const siteConfig = {
  title: ui[DEFAULT_LANG]["site.title"].text,
  description: ui[DEFAULT_LANG]["site.description"].text,
  lang: DEFAULT_LANG,
  profile: {
    author: "Himanshu Gupta",
    description: ui[DEFAULT_LANG]["profile.description"].text
  },
  settings: {
    paginationSize: 10
  }
};
const SOCIAL_LINKS = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/himanshugupta2077/himanshugupta2077.github.io"
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://www.linkedin.com/in/himanshugupta2077/"
  },
  {
    icon: "mdi:email",
    friendlyName: "email",
    link: "mailto:himanshu.infosec007@gmail.com"
  }
  // {
  //   icon: "mdi:rss",
  //   friendlyName: "rss",
  //   link: "/rss.xml"
  // }
];
const NAV_LINKS = [
  "about",
  "blog",
  "projects"
];

export { DEFAULT_LANG as D, NAV_LINKS as N, SOCIAL_LINKS as S, SUPPORTED_LANGUAGES as a, siteConfig as s, ui as u };
