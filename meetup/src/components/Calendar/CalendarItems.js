import classes from "./CalendarItems.module.css";
import Card from "../UI/Card";

const CalendarItems = (props) => {
  return (
    <Card className={classes.calendarItems}>
      <li>
        <h4>{props.title}</h4>
        <p>{props.dec}</p>
      </li>
    </Card>
  );
};
export default CalendarItems;
