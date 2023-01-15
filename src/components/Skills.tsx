import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faPython,
  faGitAlt,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faAtom,
  faDatabase,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <div className="skills-component-container content" id="skills">
      <h1>Habilidades</h1>
      <hr />
      <div className="tech">
        <span className="html">
          <FontAwesomeIcon icon={faHtml5} /> HTML
        </span>
        <span className="css">
          <FontAwesomeIcon icon={faCss3Alt} /> CSS
        </span>
        <span className="javascript">
          <FontAwesomeIcon icon={faJs} /> Javascript
        </span>
        <span className="node">
          <FontAwesomeIcon icon={faNodeJs} /> Node
        </span>
        <span className="express">
          <FontAwesomeIcon icon={faTruckFast} /> Express
        </span>
        <span className="react">
          <FontAwesomeIcon icon={faReact} /> React.js
        </span>
        <span className="python">
          <FontAwesomeIcon icon={faPython} /> Python
        </span>
        <span className="git">
          <FontAwesomeIcon icon={faGitAlt} /> Git
        </span>
        <span className="redux">
          <FontAwesomeIcon icon={faAtom} /> Redux
        </span>
        <span className="typescript">
          <FontAwesomeIcon icon={faFlag} /> Typescript
        </span>
        <span className="mysql">
          <FontAwesomeIcon icon={faDatabase} /> MySQL
        </span>
        <span className="mongo">
          <FontAwesomeIcon icon={faEnvira} /> Mongo
        </span>
      </div>
    </div>
  );
}
