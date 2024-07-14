import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const setActiveNavLink = ({ isActive }) => {
    return clsx(css.nav__link, isActive && css.active);
  };

  return (
    <nav className={css.nav__flex}>
      <NavLink className={setActiveNavLink} to={"/"}>
        Home
      </NavLink>
      <NavLink className={setActiveNavLink} to={"/movies"}>
        Movies
      </NavLink>
    </nav>
  );
}
