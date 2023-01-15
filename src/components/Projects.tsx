import projects from "../data/projects";
import "../styles/Projects.css";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="projects-component-container">
      {projects.map((project, i) => {
        return (
          <Project
            name={project.name}
            description={project.description}
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
