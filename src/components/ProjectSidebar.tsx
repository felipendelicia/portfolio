import { useEffect } from "react";
import "../styles/ProjectSidebar.css";
import { IProjectSidebarProps } from "../types/Props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChain } from "@fortawesome/free-solid-svg-icons";

export default function ProjectSidebar(props: IProjectSidebarProps) {
  useEffect(() => {
    if (props.showSidebar) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [props.showSidebar]);

  const componentClass = props.showSidebar
    ? "project-sidebar-container show-sidebar"
    : "project-sidebar-container";

  return (
    <div className={componentClass}>
      <div
        className="backdrop-sidebar"
        onClick={() => props.setShowSidebar(false)}
      ></div>
      <div className="project-sidebar">
        <div className="project-sidebar-content">
          <div className="img-container">
            <img src={props.imgURL} alt={props.name + " sneek peek"} />
          </div>
          <div className="project-content">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="project-links">
              <h4>
                <a href={props.source} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> source
                </a>
              </h4>
              {props.url ? (
                <h4>
                  <a href={props.url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faChain} /> link
                  </a>
                </h4>
              ) : (
                <></>
              )}
            </div>
            <div className="project-stack">
              {
                props.stack.map((tech, i)=>{
                  return(
                    <span key={i}>
                      {tech.icon} {tech.name}
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
