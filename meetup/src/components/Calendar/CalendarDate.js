import classes from "./CalendarDate.module.css";

const CalendarDate = (props) => {
  const date = new Date(props.date);
  console.log(date);
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: 'short',
  };
  const displayDate = new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(date);
  return (
    <div className={classes.date}>
      <div>{displayDate}</div>
    </div>
  );
};
export default CalendarDate;
