import language_conf from "../data/language_conf";
import { useContext } from "react";
import languageContext from "../context/languageContext";
import Projects from "./Projects";
import experience from "../data/experience";

export default function Experience() {

  const { language } = useContext(languageContext);

  return (
    <div className="experience-component-container content">
      <h1>{language_conf[language].experience_title}</h1>
      <hr />
      <Projects projects={experience}/>
    </div>
  );
}
