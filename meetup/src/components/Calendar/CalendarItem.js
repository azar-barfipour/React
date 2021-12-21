import { useContext } from "react";
import classes from "./CalendarItem.module.css";
import CalendarDate from "./CalendarDate";
import AuthContext from "../../store/auth-context";
const CalanderItem = (props) => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  return (
    <main>
      {isLoggedIn && (
        <div className={classes["calendarItem-container"]}>
          <li className={classes["calendarItem__item"]}> 
            <div className={classes["calendarItem__title"]}>
              <CalendarDate date={props.date} />
              <h4>{props.title}</h4>
              <p>{props.description}</p>
              <p>{props.location}</p>
            </div>
            <div>
              <img className={classes["calendarItem__img"]} src="https://source.unsplash.com/200x100/?party"></img>
            </div>
          </li>
        </div>
      )}
    </main>
  );
};
export default CalanderItem;
