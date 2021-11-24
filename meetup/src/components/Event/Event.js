import { Link } from "react-router-dom";
import classes from "./Event.module.css";

const Event = () => {
  return (
    <Link to="./Home/AddEvent" className={classes.newEvent}>
      <div className={classes["newEvent-wrapper"]}>
        <p>Start your own events</p>
        <span>&#62;</span>
      </div>
    </Link>
  );
};
export default Event;
