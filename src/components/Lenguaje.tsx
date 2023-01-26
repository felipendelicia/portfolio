import "../styles/Switch.css";
import { useEffect, useState } from "react";
import { ILenguaje } from "../types/Props";

export const MobileLenguaje = () => {
  const [lenguaje, setLenguaje] = useState<ILenguaje>("en");
  const handleChange = (lenguaje: ILenguaje) => setLenguaje(lenguaje);

  useEffect(() => {
  }, [lenguaje]);

  const handleOpositeChange = () =>
    handleChange(lenguaje === "en" ? "es" : "en");

  return (
    <div className="mobile-theme" onClick={handleOpositeChange}>
      <p>
        {lenguaje === "en" ? (
          <p className="bold">en</p>
        ) : (
          <p className="bold">es</p>
        )}
      </p>
    </div>
  );
};

export const DesktopLenguaje = () => {
  const [lenguaje, setLenguaje] = useState<ILenguaje>("en");
  const handleChange = (lenguaje: ILenguaje) => setLenguaje(lenguaje);

  useEffect(() => {
  }, [lenguaje]);

  return (
    <div className="switch-theme">
      <p
        id={lenguaje === "en" ? "lenguaje-active" : "lenguaje-inactive"}
        onClick={() => handleChange("en")}
        className="bold"
      >
        en
      </p>
      <p
        id={lenguaje === "es" ? "lenguaje-active" : "lenguaje-inactive"}
        onClick={() => handleChange("es")}
        className="bold"
      >
        es
      </p>
    </div>
  );
};

