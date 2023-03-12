import "../styles/Projects.css";
import Project from "./Project";
import languageContext from "../context/languageContext";
import { useContext } from "react";
import { IProjectsProps } from "../types/Props";

export default function Projects({projects}:IProjectsProps) {

  const { language } = useContext(languageContext)

  return (
    <div className="projects-component-container">
      {projects.map((project, i) => {
        return (
          <Project 
            date={project.date ? project.date[language] : undefined}
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
