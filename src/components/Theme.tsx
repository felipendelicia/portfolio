import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../styles/Switch.css";
import { useEffect, useState } from "react";
import { ITheme } from "../types/Props";

export const MobileTheme = () => {
  const [theme, setTheme] = useState<ITheme>("dark");
  const handleChange = (theme: ITheme) => setTheme(theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleOpositeChange = () =>
    handleChange(theme === "dark" ? "light" : "dark");

  return (
    <div className="mobile-theme" onClick={handleOpositeChange}>
      <p>
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </p>
    </div>
  );
};

export const DesktopTheme = () => {
  const [theme, setTheme] = useState<ITheme>("dark");
  const handleChange = (theme: ITheme) => setTheme(theme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="switch-theme">
      <p
        id={theme === "dark" ? "theme-active" : "theme-inactive"}
        onClick={() => handleChange("dark")}
      >
        <FontAwesomeIcon icon={faMoon} />
      </p>
      <p
        id={theme === "light" ? "theme-active" : "theme-inactive"}
        onClick={() => handleChange("light")}
      >
        <FontAwesomeIcon icon={faSun} />
      </p>
    </div>
  );
};
