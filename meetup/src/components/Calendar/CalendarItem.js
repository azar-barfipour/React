import { useContext } from "react";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./CalendarItem.module.css";
import CalendarDate from "./CalendarDate";
import AuthContext from "../../store/auth-context";

const CalanderItem = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const freeHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <main>
      {isLoggedIn && (
        <>
          <div className={classes["calendarItem-container"]}>
            <li className={classes["calendarItem__item"]}>
              <div className={classes["calendarItem-text"]}>
                <h4 className={classes["calendarItem__title"]}>
                  {props.title}
                </h4>
                <div className={classes["calendar-wrapper"]}>
                  <FontAwesomeIcon icon={faCalendar} />
                  <CalendarDate date={props.date} />
                </div>
                <div className={classes["location-wrapper"]}>
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <p className={classes["calendarItem__location"]}>
                    {props.location}
                  </p>
                </div>
                <p className={classes["calendarItem__desc"]}>
                  {props.description}
                </p>
              </div>
              <div>
                <img
                  className={classes["calendarItem__img"]}
                  src={props.image}
                  alt="party"
                ></img>
              </div>
            </li>
            <div className={classes["delete-container"]}>
              <button className={classes["delete"]} onClick={freeHandler}>
                Remove
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
export default CalanderItem;
