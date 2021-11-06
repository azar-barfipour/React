import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
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
          <li>
            <NavLink activeClassName={classes.active} to="/Explore">
              Explore
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
