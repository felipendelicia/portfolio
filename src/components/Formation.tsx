import "../styles/Formation.css";
import language_conf from "../data/language_conf";
import languageContext from "../context/languageContext";
import { useContext } from "react";
import formation from "../data/formation";

export default function Formation() {
  const { language } = useContext(languageContext);

  return (
    <div className="formation-component-container content">
      <h1>{language_conf[language].formation_title}</h1>
      <hr />
      <div className="formation-blocks">
        {formation.map((formation, i) => {
          return (
            <div className="formation-block" key={i}>
              <h3>{formation.title[language]}</h3>
              <h5>{formation.school}</h5>
              <p>{formation.date[language]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
