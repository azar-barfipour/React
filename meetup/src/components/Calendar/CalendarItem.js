import { useContext } from "react";
import classes from "./CalendarItem.module.css";
import CalendarDate from "./CalendarDate";
import AuthContext from "../../store/auth-context";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const CalanderItem = (props) => {
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  const freeHandler = (event) =>{
    event.preventDefault();
    
  }
  return (
    <main>
      {isLoggedIn && (
        <div className={classes["calendarItem-container"]}>
          <li className={classes["calendarItem__item"]}> 
            <div className={classes["calendarItem-text"]}>
              <div className={classes["calendar-wrapper"]}>
              <FontAwesomeIcon icon={faCalendar}/>
              <CalendarDate date={props.date}/>
              </div>
              <h4 className={classes["calendarItem__title"]}>{props.title}</h4>
              <p className={classes["calendarItem__desc"]}>{props.description}</p>
              <div className={classes["location-wrapper"]}>
              <FontAwesomeIcon icon={faLocationArrow}/>
              <p className={classes["calendarItem__location"]}>{props.location}</p>
              </div>
            </div>
            <div>
              <img className={classes["calendarItem__img"]} src="https://source.unsplash.com/200x100/?party"></img>
            </div>
          </li>
            <button onClick={freeHandler}>Free</button>
        </div>
      )}
    </main>
  );
};
export default CalanderItem;
