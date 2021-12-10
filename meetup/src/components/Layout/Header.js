import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Header = () => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <div className={classes.header}>
      <div>
      <h1 className={classes['header__title']}>meetup</h1>
      </div>
      <nav className={classes['header__nav']}>
        <ul className={classes['header__list']}>
          <li className={classes['header__list--item']}> 
            <NavLink  activeClassName={classes.active} to="/Home">
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={classes['header__list--item']}>
              <NavLink activeClassName={classes.active} to="/Explore">
                Explore
              </NavLink>
            </li>
          )}
          <li className={classes['header__list--item']}> 
            <NavLink activeClassName={classes.active} to="/auth">
              {isLoggedIn ? "Log out" : "Log in"}
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
  );
};

export default Header;
