import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./data/routes";

function App() {
  return (
    <div className="app-component-container">
      <Router>
        <Navbar/>
        <Routes>
          {routes.map((route, i) => {
            return (
              <Route path={route.path} element={route.component} key={i} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
