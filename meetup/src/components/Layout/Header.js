import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Header = () => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <div className={classes.header}>
      <h1>meetup</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/Home">
              Home
            </NavLink>
          </li>
          {/* {isLoggedIn && ( */}
          <li>
            <NavLink activeClassName={classes.active} to="/Explore">
              Explore
            </NavLink>
          </li>
          {/* )
          }*/}
          <li>
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
