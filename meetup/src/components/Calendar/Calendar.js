import react, { Fragment } from "react";
import classes from "../Calendar/Calendar.module.css";
const Calendar = () => {
  return (
    <Fragment>
      <div className={classes.calendar}>
        <div>
          <h4>Your Calendar</h4>
        </div>
        <div>
          <h6>title</h6>
          <p>discription</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Calendar;
