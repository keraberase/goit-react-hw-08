import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1>
        Welcome to{" "}
        <NavLink className={css.link} to="/login">
          Contacts Book App
        </NavLink>
      </h1>
    </div>
  );
};

export default HomePage;
