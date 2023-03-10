import language_conf from "../data/language_conf";
import { useContext } from "react";
import languageContext from "../context/languageContext";

export default function Experience() {

  const { language } = useContext(languageContext);

  return (
    <div className="experience-component-container content" id="experience">
      <h1>{language_conf[language].experience_title}</h1>
      <hr />
    </div>
  );
}
