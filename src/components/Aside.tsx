import "../styles/Aside.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faComment,
  faDiagramProject,
  faGraduationCap,
  faTerminal,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Aside() {
  return (
    <aside className="aside-component-container">
      <div className="aside-section">
        <div className="aside-page">
          <FontAwesomeIcon icon={faCircleUser}/>
          <a href="#landing">Felipe Delicia</a>
        </div>
      </div>
      <hr/>
      <div className="aside-section">
        <div className="aside-page">
          <FontAwesomeIcon icon={faComment}/>
          <a href="#about">Sobre mi</a>
        </div>
        <div className="aside-page">
          <FontAwesomeIcon icon={faDiagramProject}/>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="aside-page">
          <FontAwesomeIcon icon={faGraduationCap}/>
          <a href="#formation">Formacion</a>
        </div>
        <div className="aside-page">
          <FontAwesomeIcon icon={faTerminal}/>
          <a href='#skills'>Habilidades</a>
        </div>
        <div className="aside-page">
          <FontAwesomeIcon icon={faPaperPlane}/>
          <a href="#contact">Contacto</a>
        </div>
      </div>
      <hr/>
    </aside>
  );
}
