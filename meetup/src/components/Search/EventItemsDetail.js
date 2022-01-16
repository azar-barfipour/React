import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalendarDate from "../Calendar/CalendarDate";
import classes from "./EventItemsDetail.module.css";
const EventItemsDetail = (props) => {
  return (
    <li className={classes["detail__item"]}>
      <img
        src="https://source.unsplash.com/200x130/?party"
        className={classes["detail__img"]}
      />
      <section className={classes["detail-wrapper"]}>
        <h5 className={classes["detail__title"]}>{props.title}</h5>
        <div className={classes["detail-wrapper__date"]}>
          <FontAwesomeIcon icon={faCalendar} />
          <CalendarDate date={props.date} />
        </div>
        <div className={classes["detail-wrapper__location"]}>
          <FontAwesomeIcon icon={faLocationArrow} />
          <p className={classes["detail__location"]}>{props.location}</p>
        </div>
        <h3>About</h3>
        <p className={classes["detail__desc"]}>{props.description}</p>
      </section>
    </li>
  );
};
export default EventItemsDetail;
