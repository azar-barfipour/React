import classes from "./CalendarDate.module.css";

const CalendarDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const hour = props.date.getHours();
  const minute = props.date.getMinutes();
  return (
    <div className={classes.date}>
      <div>{year + " " + month + " " + day}</div>
      <div>{hour + ": " + minute}</div>
    </div>
  );
};
export default CalendarDate;
