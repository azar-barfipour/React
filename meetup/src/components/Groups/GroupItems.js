import react, { useState } from "react";
import classes from "./GroupItems.module.css";
import Card from "../UI/Card";

const GroupItems = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "short" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  // const hour = props.date.getHours();
  // const minute = props.date.getMinutes();

  return (
    <Card className={classes.groupItems}>
      <li>
        <span>
          <button type="button" onClick={props.onRemove}>
            X
          </button>
        </span>
        <h5>{props.title}</h5>
        <button type="button">Details</button>
        {/* <p>{props.description}</p> */}
        {/* <p>{year + month + day + hour + minute}</p> */}
      </li>
    </Card>
  );
};
export default GroupItems;
