import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./EventLink.module.css";
import AuthContext from "../../store/auth-context";

const EventLink = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div className={classes["link-wrapper"]}>
      <Link to="/AddEvent" className={classes["event-new"]}>
        {isLoggedIn ? (
          <div className={classes["event-new__wrapper"]}>
            <p className={classes["event-new__text"]}>
              Start your own events &#62;
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </Link>
    </div>
  );
};
export default EventLink;
