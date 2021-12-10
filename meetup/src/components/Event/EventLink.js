import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./EventLink.module.css";
import AuthContext from "../../store/auth-context";

const EventLink = () => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <Link to="./Home/AddEvent" className={classes['event-new']}>
      {isLoggedIn ? (
        <div className={classes["event-new__wrapper"]}>
          <p className={classes["event-new__text"]}>Start your own events &#62;</p>
        </div>
      ) : (
        <div></div>
      )}
    </Link>
  );
};
export default EventLink;
