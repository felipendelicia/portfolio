import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faDiagramProject,
  faGraduationCap,
  faTerminal,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
    {
        title: 'Sobre mi',
        path: '#about',
        icon: <FontAwesomeIcon icon={faComment}/>
    },
    {
        title: 'Portafolio',
        path: '#portfolio',
        icon: <FontAwesomeIcon icon={faDiagramProject}/>
    },
    {
        title: 'Formacion',
        path: '#formation',
        icon: <FontAwesomeIcon icon={faGraduationCap}/>
    },
    {
        title: 'Habilidades',
        path: '#skills',
        icon: <FontAwesomeIcon icon={faTerminal}/>
    },
    {
        title: 'Contacto',
        path: '#contact',
        icon: <FontAwesomeIcon icon={faPaperPlane}/>
    },
]

export default sections