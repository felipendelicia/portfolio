import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Aside.css";
import sections from "../data/sections";
import {DesktopTheme} from "./Theme";
import { DesktopLenguaje } from "./Lenguaje";

export default function Aside() {
  return (
    <aside className="aside-component-container">
      <div className="aside-centered-div">
        <section>
          <div className="section-page">
          <FontAwesomeIcon icon={faCircleUser}/>
          <a href="#landing">Felipe N. Delicia</a>
          </div>
        </section>
        <hr/>
        <section>
          {
            sections.map((section, i)=>{
              return(
                <div className="section-page" key={i}>
                  {section.icon}
                  <a href={section.path}>{section.title}</a>
                </div>
              )
            })
          }
        </section>
        <hr/>
        <section>
          <div className="section-page">
            <DesktopTheme/>
          </div>
          <div className="section-page">
            <DesktopLenguaje/>
          </div>
        </section>
      </div>
    </aside>
  );
}
