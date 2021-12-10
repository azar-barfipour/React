import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import {useContext} from 'react'
import AuthContext from "../../store/auth-context";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const autCtx = useContext(AuthContext);
  const isLoggedIn = autCtx.isLoggedIn;
  return (
    <div className={classes.footer}>
      <nav className={classes['footer__nav']}>
        <ul className={classes['footer__list']}>
          <li className={classes['footer__list--item']}> 
            <NavLink  activeClassName={classes.active} to="/Home">
              <div className={classes['footer__list--link']}>
              <FontAwesomeIcon icon={faHome}/>
              <p className={classes['footer__list--title']}>Home</p>
              </div>
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={classes['footer__list--item']}>
              <NavLink activeClassName={classes.active} to="/Explore">
              <div className={classes['footer__list--link']}>
              <FontAwesomeIcon icon={faSearch}/>
              <p className={classes['footer__list--title']}>Explore</p>
              </div>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Footer;
