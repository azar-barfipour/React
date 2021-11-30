import { useContext } from "react";
import classes from "./CalendarItem.module.css";
import CalendarDate from "./CalendarDate";
import AuthContext from "../../store/auth-context";
const CalanderItem = (props) => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <main className={classes["calendarItems_container"]}>
      {isLoggedIn && (
        <div className={classes.calendarItems}>
          <li>
            <div>
              <img src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
            </div>
            <div className={classes.title}>
              <CalendarDate date={props.date} />
              <h4>{props.title}</h4>
              {/* <p>{props.description}</p> */}
            </div>
          </li>
        </div>
      )}
    </main>
  );
};
export default CalanderItem;
