import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNode,
  faEnvira,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faFlag, faTruckFast } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "⚽ MODO fixture",
    description: {
      es: "Desarrollo de una web para mostrar los resultados del torneo interno de fútbol en MODO. Utilicé ReactJs con typescript para crear los componentes funcionales de la aplicación. Además, seguí la metodología git flow para el control de versiones y el desarrollo de la aplicación.",
      en: "Development of a website to show the results of the internal soccer tournament in MODO. I used ReactJs with typescript to create the functional components of the application. In addition, I followed the git flow methodology for version control and application development.",
    },
    url: "https://modofixture.netlify.app/",
    source: "https://github.com/felipendelicia/MODO-fixture-frontend",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/214992257-654f78ef-8c78-455c-b8ec-cf9e39e19a68.gif",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
    ],
  },
  {
    name: "👷 Slaves CRUD",
    description: {
      es: "Desarrollo de un CRUD de gestión de esclavos utilizando Node (Express.js y TypeScript) para crear una API que recibe y procesa datos de una base de datos no relacional de MongoDB. El frontend de esta herramienta fue desarrollado en ReactJS y permite mostrar los datos de manera intuitiva en la interfaz de usuario.",
      en: "Development of a slave management CRUD using Node (Express.js and TypeScript) to create an API that receives and processes data from a non-relational MongoDB database. The frontend of this tool was developed in ReactJS and allows to display the data intuitively in the user interface.",
    },
    source: "https://github.com/felipendelicia/slaves-crud",
    imgURL: "./assets/img/slaves-CRUD.png",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
      {
        icon: <FontAwesomeIcon icon={faTruckFast} />,
        name: "Express.js",
      },
      {
        icon: <FontAwesomeIcon icon={faNode} />,
        name: "Node",
      },
      {
        icon: <FontAwesomeIcon icon={faEnvira} />,
        name: "Mongo",
      },
    ],
  },
  {
    name: "🏫 codeSchool",
    description: {
      es: "Desarrollo una aplicación que enseña desarrollo web. Está construida con React y utiliza TypeScript en el frontend. Para la navegación he utilizado react-router-dom y he implementado transiciones con Framer Motion.",
      en: "I'm building an app that teaches web development. It's built with React and uses TypeScript on the frontend. For navigation, it used react-router-dom and implemented transitions with Framer Motion.",
    },
    url: "https://codeschool-project.netlify.app/",
    source: "https://github.com/felipendelicia/codeschool-project",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/214992726-a3505773-17c6-4ce0-9d20-bcbfbfce404f.gif",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
    ],
  },
  {
    name: "🧪 Boyle",
    description: {
      es: "El proyecto consiste en el desarrollo de un bot de Discord en Python que realiza cálculos comunes en el campo de las ciencias exactas. Gracias a él, logramos avanzar a la feria de ciencias a nivel nacional en el año 2021.",
      en: "The project consists of the development of a Discord bot in Python that performs common calculations in the field of exact sciences. Thanks to it, we managed to advance to the national science fair in the year 2021.",
    },

    source: "https://github.com/felipendelicia/boyle-discord-bot",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/214996533-87174162-e26b-42a8-861a-200092013ab0.gif",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faPython} />,
        name: "Python",
      },
    ],
  },
  {
    name: "⌛ Pomodoro routine",
    description: {
      es: "El proyecto se enfoca en la implementación de la técnica Pomodoro para mejorar la eficiencia en la realización de tareas estudio y trabajo. Se trata de un reloj personalizado que permite marcar períodos de tiempo de descanso y trabajo.",
      en: "The project focuses on the implementation of the Pomodoro technique to improve efficiency in carrying out study and work tasks. It is a personalized clock that allows marking periods of rest and work time.",
    },
    source: "https://github.com/felipendelicia/pomodoro-routine",
    imgURL:
      "https://user-images.githubusercontent.com/84806140/214993904-bac74dc5-001c-4f99-ac8e-028f469012a2.gif",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faPython} />,
        name: "Python",
      },
    ],
  },
];

export default projects;
