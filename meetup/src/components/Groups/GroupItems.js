import classes from "./GroupItems.module.css";
import react, { Fragment } from "react";
const GroupItems = (props) => {
  return (
    <li className={classes.groupItems}>
      <p>{props.title}</p>
    </li>
  );
};
export default GroupItems;
