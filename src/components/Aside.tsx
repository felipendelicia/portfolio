import "../styles/Aside.css";
import sections from "../data/sections";
import { DesktopTheme } from "./Theme";
import { DesktopLenguaje } from "./Lenguaje";
import languageContext from "../context/languageContext";
import { useContext } from "react";

export default function Aside() {
  const { language } = useContext(languageContext);

  return (
    <aside className="aside-component-container">
      <div className="aside-centered-div">
        <section>
          <div className="section-page">
            <a href="#landing">Felipe</a>
          </div>
        </section>
        <hr />
        <section>
          {sections.map((section, i) => {
            return (
              <div className="section-page" key={i}>
                <a href={section.path}>{section.title[language]}</a>
              </div>
            );
          })}
        </section>
        <hr />
        <section>
          <div className="section-page">
            <DesktopTheme />
          </div>
          <div className="section-page">
            <DesktopLenguaje />
          </div>
        </section>
      </div>
    </aside>
  );
}
