import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import languageContext from "./context/languageContext";
import Content from "./components/Content";
import { MobileLenguaje } from "./components/Lenguaje";
import { MobileTheme } from "./components/Theme";
import { ILenguaje } from "./types/Props";

function App() {

  const [language, setLanguage] = useState<ILenguaje>('es')

  return (
    <div className="app">
      <languageContext.Provider value={{ language, setLanguage }}>
        <Aside />
        <Content />

        <div className="app-mobile-options">
          <MobileTheme />
          <MobileLenguaje />
        </div>
      </languageContext.Provider>
    </div>
  );
}

export default App;
