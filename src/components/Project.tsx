import { useState } from "react";
import "../styles/Project.css";
import { IProyectProps } from "../types/Props";
import ProjectSidebar from "./ProjectSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChain } from "@fortawesome/free-solid-svg-icons";

export default function Project(props: IProyectProps) {
  const shortDescription = props.description.split(" ").slice(0, 20).join(" ");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="project-component-cotainer">
        <h3 onClick={() => setShowSidebar(true)}>{props.name}</h3>
        <p>{shortDescription + "..."}</p>
        <p>{props.date}</p>
        <div className="poweredby">

          {props.source ? (
            <span>
              <FontAwesomeIcon icon={faGithub} />{" "}
              <a href={props.source} target="_blank" rel="noreferrer">
                source
              </a>
            </span>
          ) : (
            <></>
          )}
          {props.url ? (
            <span>
              <FontAwesomeIcon icon={faChain} />{" "}
              <a href={props.url} target="_blank" rel="noreferrer">
                link
              </a>
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <ProjectSidebar
        showSidebar={showSidebar}
        setShowSidebar={(bool: boolean) => setShowSidebar(bool)}
        name={props.name}
        description={props.description}
        url={props.url}
        source={props.source}
        imgURL={props.imgURL}
        stack={props.stack}
        date={props.date}
      />
    </>
  );
}
