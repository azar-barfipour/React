import classes from "./CalendarItems.module.css";
import CalendarDate from "./CalendarDate";
import Card from "../UI/Card";

const CalendarItems = (props) => {
  return (
    <div className={classes.calendarItems}>
      <li>
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        {/* <CalendarDate date={props.date} /> */}
        <div>
          <img src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
        </div>
      </li>
    </div>
  );
};
export default CalendarItems;
