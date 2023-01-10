import { INavbarCategories } from "../types/Navbar";
import { Link } from "react-router-dom";
import routes from "../data/routes";
import "../styles/Navbar.css";

function NavbarCategories(props: INavbarCategories) {
  return (
    <Link to={props.path}>
      <p>{props.name}</p>
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="navbar-component-container">
      {routes.map((route, i) => {
        return (
          <NavbarCategories name={route.name} path={route.path} key={i} />
        );
      })}
    </nav>
  );
}
