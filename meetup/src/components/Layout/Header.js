import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className={classes.header}>
      <div>
        <NavLink to="/Home" className={classes["header__title"]}>
          meetup
        </NavLink>
      </div>
      <nav className={classes["header__nav"]}>
        <ul className={classes["header__list"]}>
          <li className={classes["header__list--item"]}>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive
                  ? classes["header__active"]
                  : classes["header__inactive"]
              }
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={classes["header__list--item"]}>
              <NavLink
                to="/Explore"
                className={({ isActive }) =>
                  isActive
                    ? classes["header__active"]
                    : classes["header__inactive"]
                }
              >
                Explore
              </NavLink>
            </li>
          )}
        </ul>
        <ul className={classes["header__auth"]}>
          <li className={classes["header__auth--item"]}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? classes["header__active"]
                  : classes["header__inactive"]
              }
              to="/auth"
            >
              {isLoggedIn ? "Log out" : "Log in"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
