import react, { useState } from "react";
import classes from "./GroupItems.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const GroupItems = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "short" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  // const hour = props.date.getHours();
  // const minute = props.date.getMinutes();

  return (
    <Card className={classes.groupItems}>
      <li>
        {/* <span>
          <button type="button" onClick={props.onRemove}>
            X
          </button>
        </span> */}
        <Link className={classes.link} to={`/Explore/${props.id}`}>
          <h5>{props.title}</h5>
        </Link>
      </li>
    </Card>
  );
};
export default GroupItems;
