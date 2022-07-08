import classes from "./EventItem.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const EventItem = (props) => {
  return (
    // groupItemWrap
    <Card className={classes["event-items"]}>
      <li className={classes["event-item"]}>
        <Link className={classes["event-item__link"]} to={`/${props.id}`}>
          <div className={classes["event-item__image-wrapper"]}>
            <img
              src="https://source.unsplash.com/300x360?party"
              alt="theme event"
              className={classes["event-item__image"]}
            />
          </div>
          <h5 className={classes["event-item__title"]}>{props.title}</h5>
        </Link>
      </li>
    </Card>
  );
};
export default EventItem;
