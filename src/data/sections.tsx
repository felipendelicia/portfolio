import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faDiagramProject,
  faGraduationCap,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const sections = [
    {
        title: 'Sobre mi',
        path: '#about',
        icon: <FontAwesomeIcon icon={faComment}/>
    },
    {
        title: 'Formacion',
        path: '#formation',
        icon: <FontAwesomeIcon icon={faGraduationCap}/>
    },
    {
        title: 'Portafolio',
        path: '#portfolio',
        icon: <FontAwesomeIcon icon={faDiagramProject}/>
    },
    {
        title: 'Contacto',
        path: '#contact',
        icon: <FontAwesomeIcon icon={faPaperPlane}/>
    },
]

export default sections