import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode, faEnvira, faPython } from "@fortawesome/free-brands-svg-icons";
import { faFlag, faTruckFast } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "MODO fixture",
    description:
      "Desarrollo de una web para mostrar los resultados del torneo interno de fútbol en MODO. Utilicé ReactJs con typescript para crear los componentes funcionales de la aplicación. Además, seguí la metodología git flow para el control de versiones y el desarrollo de la aplicación.",
    url: "https://modofixture.netlify.app/",
    source: "https://github.com/felipendelicia/MODO-fixture-frontend",
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
    name: "Slaves CRUD",
    description:
      "Desarrollo de un CRUD de gestión de esclavos utilizando Node (Express.js y TypeScript) para crear una API que recibe y procesa datos de una base de datos no relacional de MongoDB. El frontend de esta herramienta fue desarrollado en ReactJS y permite mostrar los datos de manera intuitiva en la interfaz de usuario.",
    source: "https://github.com/felipendelicia/slaves-crud",
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
    name:"codeSchool",
    description: "Desarrollo una aplicación que enseña desarrollo web. Está construida con React y utiliza TypeScript en el frontend. Para la navegación he utilizado react-router-dom y he implementado transiciones con Framer Motion.",
    url:"https://codeschool-project.netlify.app/",
    source:"https://github.com/felipendelicia/codeschool-project",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: "React.js",
      },
      {
        icon: <FontAwesomeIcon icon={faFlag} />,
        name: "Typescript",
      },
    ]
  },
  {
    name:"Boyle",
    description: "El proyecto consiste en el desarrollo de un bot de Discord en Python que realiza cálculos comunes en el campo de las ciencias exactas. Gracias a él, logramos avanzar a la feria de ciencias a nivel nacional en el año 2021.",
    source:"https://github.com/felipendelicia/boyle-discord-bot",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faPython} />,
        name: "Python",
      }
    ]
  },
  {
    name:"Pomodoro routine",
    description: "El proyecto se enfoca en la implementación de la técnica Pomodoro para mejorar la eficiencia en la realización de tareas estudio y trabajo. Se trata de un reloj personalizado que permite marcar períodos de tiempo de descanso y trabajo.",
    source:"https://github.com/felipendelicia/pomodoro-routine",
    stack: [
      {
        icon: <FontAwesomeIcon icon={faPython} />,
        name: "Python",
      }
    ]
  }
];

export default projects;
