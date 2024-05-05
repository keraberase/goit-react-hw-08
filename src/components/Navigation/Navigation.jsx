import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>

        {isLogin && (
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
