import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import languageContext from "../context/languageContext";
import language_conf from "../data/language_conf";
import { useContext } from "react";
import "../styles/Landing.css";

export default function Landing() {

  const { language } = useContext(languageContext);

  return (
    <div className="landing-component-container content" id="landing">
      <h1>{language_conf[language].landing_title}</h1>
      <hr />
      <h2>{language_conf[language].landing_subtitle}</h2>
      <p>
      {language_conf[language].landing_description}{" "}
        <a href="mailto:delicia4581@gmail.com">delicia4581@gmail.com</a> ✍️
      </p>
      <a className="download-cv" href="./assets/doc/cv.pdf" download='Felipe.pdf'>
        {language_conf[language].landing_button}
      </a>
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
