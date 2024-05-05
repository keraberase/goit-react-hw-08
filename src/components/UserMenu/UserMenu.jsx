import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.userMenu}>
      <p className={css.userInfo}>Welcome, {userData.name}🙂</p>
      <button
        className={css.btnLogout}
        onClick={() => dispatch(logout())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
