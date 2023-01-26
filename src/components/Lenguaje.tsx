import "../styles/Switch.css";
import { useContext } from "react";
import languageContext from "../context/languageContext";
import { ILenguaje } from "../types/Props";

export const MobileLenguaje = () => {
  const { language, setLanguage } = useContext(languageContext);

  const handleOpositeChange = () => setLanguage(language === 'en' ? 'es' : 'en')

  return (
    <div className="mobile-theme" onClick={handleOpositeChange}>
      <p>
        {language === "en" ? (
          <b>en</b>
        ) : (
          <b>es</b>
        )}
      </p>
    </div>
  );
};

export const DesktopLenguaje = () => {
  const { language, setLanguage } = useContext(languageContext);

  const handleChange = (language: ILenguaje) => setLanguage(language); console.log(language)

  return (
    <div className="switch-theme">
      <p
        id={language === "en" ? "lenguaje-active" : "lenguaje-inactive"}
        onClick={() => handleChange("en")}
        className="bold"
      >
        en
      </p>
      <p
        id={language === "es" ? "lenguaje-active" : "lenguaje-inactive"}
        onClick={() => handleChange("es")}
        className="bold"
      >
        es
      </p>
    </div>
  );
};

