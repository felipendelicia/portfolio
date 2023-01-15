import { useState } from "react";
import "../styles/Project.css";
import { IProyectProps } from "../types/Props";
import ProjectSidebar from "./ProjectSidebar";

export default function Project(props: IProyectProps) {
  const shortDescription = props.description.split(" ").slice(0, 20).join(" ");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="project-component-cotainer">
        <h3 onClick={()=>setShowSidebar(true)}>{props.name}</h3>
        <p>{shortDescription + "..."}</p>
        <div className="poweredby">
          {props.stack.map((tech, i) => {
            return (
              <span>
                {tech.icon} {tech.name}
              </span>
            );
          })}
        </div>
      </div>
      <ProjectSidebar
        showSidebar={showSidebar}
        setShowSidebar={(bool: boolean) => setShowSidebar(bool)}
      />
    </>
  );
}
