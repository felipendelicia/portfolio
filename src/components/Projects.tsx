import projects from "../data/projects";
import "../styles/Projects.css";
import Project from "./Project";
import languageContext from "../context/languageContext";
import { useContext } from "react";

export default function Projects() {

  const { language } = useContext(languageContext)

  return (
    <div className="projects-component-container">
      {projects.map((project, i) => {
        return (
          <Project
            name={project.name}
            description={project.description[language]}
            url={project.url}
            source={project.source}
            imgURL={project.imgURL}
            stack={project.stack}
            key={i}
          />
        );
      })}
    </div>
  );
}
