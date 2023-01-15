import { useEffect } from "react";
import "../styles/ProjectSidebar.css";
import { IProjectSidebarProps } from "../types/Props";

export default function ProjectSidebar(props:IProjectSidebarProps) {
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
      <div className="project-sidebar"></div>
    </div>
  );
}
