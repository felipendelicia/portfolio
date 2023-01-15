import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="landing-component-container content" id="landing">
      <h1>Felipe Nahuel Delicia</h1>
      <hr />
      <h2>Programador Full Stack</h2>
      <p>
        Hola! si deseas ponerte en contacto conmigo, escríbeme a{" "}
        <a href="mailto:delicia4581@gmail.com">delicia4581@gmail.com</a>
        {' '}✍️
      </p>
      <button>Descarga mi CV</button>
      <div className="socialmedia-container">
        <a
          href="https://github.com/felipendelicia"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faSquareGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-nahuel-delicia-b2487119a/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
