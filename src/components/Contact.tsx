import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faInbox, faFlag } from "@fortawesome/free-solid-svg-icons";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-component-container content" id="contact">
      <h1>Contacto</h1>
      <hr />
      <h3>Hablemos</h3>
      <p>
        <FontAwesomeIcon icon={faLinkedin} /> Linkedin{" "}
        <a
          href="https://www.linkedin.com/in/felipe-nahuel-delicia-b2487119a/"
          target="_blank"
          rel="noreferrer"
        >
          in/felipe-nahuel-delicia-b2487119a
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faInbox} /> Email{" "}
        <a href="mailto:delicia4581@gmail.com" target="_blank" rel="noreferrer">
          delicia4581@gmail.com
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} /> Github{" "}
        <a
          href="https://github.com/felipendelicia"
          target="_blank"
          rel="noreferrer"
        >
          github.com/felipendelicia
        </a>
      </p>
      <h4>
        <a
          href="https://github.com/felipendelicia/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> source
        </a>
        {' '}- powered by{" "}
      </h4>
      <div className="tech-contact">
        <span className="react">
          <FontAwesomeIcon icon={faReact} /> React.js
        </span>
        <span className="typescript">
          <FontAwesomeIcon icon={faFlag} /> Typescript
        </span>
      </div>
    </div>
  );
}
