import { useContext } from "react";
import language_conf from '../data/language_conf'
import languageContext from "../context/languageContext";

export default function About() {

  const { language } = useContext(languageContext);

  return (
    <div className="about-component-container content" id="about">
      <h1>{language_conf[language].about_title}</h1>
      <hr />
      <p>
        {language_conf[language].about_description}
      </p>
      <h3>
        {language_conf[language].about_blockquote}
      </h3>
      <p>
        {language_conf[language].about_linkedin}{" "}
        <a
          href="https://www.linkedin.com/in/felipe-nahuel-delicia-b2487119a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        🎓
      </p>
    </div>
  );
}
