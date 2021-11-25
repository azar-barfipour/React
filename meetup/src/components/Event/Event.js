import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./Event.module.css";
import AuthContext from "../../store/auth-context";

const Event = () => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <Link to="./Home/AddEvent" className={classes.newEvent}>
      {isLoggedIn ? (
        <div className={classes["newEvent-wrapper"]}>
          <p>Start your own events</p>
          <span>&#62;</span>
        </div>
      ) : (
        <div></div>
      )}
    </Link>
  );
};
export default Event;
