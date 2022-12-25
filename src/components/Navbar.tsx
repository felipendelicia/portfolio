import { INavbarCategories } from "../types/Navbar";
import routes from "../data/routes";
import "../styles/Navbar.css";

function NavbarCategories(props: INavbarCategories) {
  return <p to={props.route}>{props.name}</p>;
}

export default function Navbar() {
  return (
    <nav className="navbar-component-container">
      {routes.map((route, i) => {
        return (
          <NavbarCategories name={route.name} route={route.route} key={i} />
        );
      })}
      golas
    </nav>
  );
}
