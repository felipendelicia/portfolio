import Projects from "./Projects";
import myProjects from "../data/projects";

export default function Portfolio() {
  return (
    <div className="portfolio-component-container content">
      <h1>Portafolio</h1>
      <hr />
      <Projects projects={myProjects}/>
    </div>
  );
}
