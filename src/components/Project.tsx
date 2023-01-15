import "../styles/Project.css";
import { IProyectProps } from "../types/Props";

export default function Project(props: IProyectProps) {
  const shortDescription = props.description.split(' ').slice(0,20).join(' ')

  return (
    <div className="project-component-cotainer">
      <h3>{props.name}</h3>
      <p>{shortDescription + '...'}</p>
      <div className="poweredby">
        {
          props.stack.map((tech, i)=>{
            return(
              <span>{tech.icon} {tech.name}</span>
            )
          })
        }
      </div>
    </div>
  );
}
