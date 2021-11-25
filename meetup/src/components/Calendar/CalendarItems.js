import { useContext, Fragment } from "react";
import classes from "./CalendarItems.module.css";
import AuthContext from "../../store/auth-context";
import CalendarDate from "./CalendarDate";

const CalendarItems = (props) => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <Fragment>
      {isLoggedIn && (
        <div className={classes.calendarItems}>
          <li>
            <div>
              <h4>{props.title}</h4>
              <p>{props.description}</p>
            </div>
            {/* <CalendarDate date={props.date} /> */}
            <div>
              <img src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
            </div>
          </li>
        </div>
      )}
    </Fragment>
  );
};
export default CalendarItems;
