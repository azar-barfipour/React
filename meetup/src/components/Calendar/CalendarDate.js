import classes from "./CalendarDate.module.css";

const CalendarDate = (props) => {
  const parts = props.date.slice(0, -1).split("T");
  const dateComponent = parts[0];
  const timeComponent = parts[1];
  const month = dateComponent
    .substring(5, 7)
    .toLocaleString("en-US", { month: "short" });
  const day = dateComponent
    .substring(8, 10)
    .toLocaleString("en-US", { day: "2-digit" });
  const year = dateComponent.substring(0, 4);
  const hour = timeComponent.substring(0, 2);
  const minute = timeComponent.substring(3, 5);
  return (
    <div className={classes.date}>
      <div>{year + "/" + month + "/" + day + " " + hour + ":" + minute}</div>
    </div>
  );
};
export default CalendarDate;
