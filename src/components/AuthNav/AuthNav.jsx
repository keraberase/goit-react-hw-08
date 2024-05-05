import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AuthNav = () => {
  return (
    <div className={css.authNavContainer}>
      <NavLink className={buildLinkClass} to="/register">
        Registration
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
