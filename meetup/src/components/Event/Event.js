import { Link } from "react-router-dom";
import classes from "./Event.module.css";

const Event = () => {
  return (
    <Link to="./Explore">
      <p className={classes.newEvent}>Start your own events</p>
    </Link>
  );
};
export default Event;
