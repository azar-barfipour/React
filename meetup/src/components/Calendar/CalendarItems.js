import classes from "./CalendarItems.module.css";
import CalendarDate from "./CalendarDate";
import Card from "../UI/Card";

const CalendarItems = (props) => {
  return (
    <Card className={classes.calendarItems}>
      <li>
        <h4>{props.title}</h4>
        <p>{props.dec}</p>
        <CalendarDate date={props.date} />
      </li>
    </Card>
  );
};
export default CalendarItems;
