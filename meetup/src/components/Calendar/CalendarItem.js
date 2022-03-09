import { useContext, Fragment, useState } from "react";
import classes from "./CalendarItem.module.css";
import CalendarDate from "./CalendarDate";
import AuthContext from "../../store/auth-context";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../UI/Modal";

const CalanderItem = (props) => {
  const [modal, setModal] = useState(false);
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  const freeHandler = (event) => {
    event.preventDefault();
    props.onDelete(props.id);
  };

  return (
    <main>
      {isLoggedIn && (
        <Fragment>
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
                  src="https://source.unsplash.com/200x100/?party"
                ></img>
              </div>
            </li>
            <div className={classes["delete-container"]}>
              <button className={classes["delete"]} onClick={freeHandler}>
                Remove
              </button>
            </div>
          </div>
        </Fragment>
      )}
    </main>
  );
};
export default CalanderItem;
