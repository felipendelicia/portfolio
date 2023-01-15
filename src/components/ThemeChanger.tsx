import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../styles/Switch.css";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeChanger() {
  const [theme, setTheme] = useState<Theme>("dark");
  const handleChange = (theme: Theme) => setTheme(theme);

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
}
