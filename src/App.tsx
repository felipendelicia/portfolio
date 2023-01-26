import "./App.css";
import Aside from "./components/Aside";
import Content from "./components/Content";
import { MobileLenguaje } from "./components/Lenguaje";
import { MobileTheme } from "./components/Theme";

function App() {
  return (
    <div className="app">
      <Aside/>
      <Content/>

      <div className="app-mobile-options">
        <MobileTheme/>
        <MobileLenguaje/>
      </div>
        
    </div>
  );
}

export default App;
