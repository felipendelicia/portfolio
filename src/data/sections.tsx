import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faDiagramProject,
  faGraduationCap,
  faPaperPlane,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: {
      es: "Sobre mi",
      en: "About me",
    },
    path: "#about",
    icon: <FontAwesomeIcon icon={faComment} />,
  },
  {
    title: {
      es: "Experiencia",
      en: "Experience",
    },
    path: "#experience",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    title: {
      es: "Formacion",
      en: "Formation",
    },
    path: "#formation",
    icon: <FontAwesomeIcon icon={faGraduationCap} />,
  },
  {
    title: {
      es: "Portafolio",
      en: "Portfolio",
    },
    path: "#portfolio",
    icon: <FontAwesomeIcon icon={faDiagramProject} />,
  },
  {
    title: {
      es: "Contacto",
      en: "Contact",
    },
    path: "#contact",
    icon: <FontAwesomeIcon icon={faPaperPlane} />,
  }
];

export default sections;
