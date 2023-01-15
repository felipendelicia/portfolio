import "./App.css";
import Aside from "./components/Aside";
import Content from "./components/Content";
import { MobileTheme } from "./components/Theme";

function App() {
  return (
    <div className="app">
      <Aside/>
      <Content/>
      <MobileTheme/>
    </div>
  );
}

export default App;
