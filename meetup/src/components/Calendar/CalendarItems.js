import classes from "./CalendarItems.module.css";
import Card from "../UI/Card";

const CalendarItems = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const hour = props.date.getHours();
  const minute = props.date.getMinutes();
  const date = year + " " + month + " " + day + " " + hour + " : " + minute;
  return (
    <Card className={classes.calendarItems}>
      <li>
        <h4>{props.title}</h4>
        <p>{props.dec}</p>
        <p>{date}</p>
      </li>
    </Card>
  );
};
export default CalendarItems;
