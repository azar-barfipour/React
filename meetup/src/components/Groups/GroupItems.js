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
    // groupItemWrap
    <Card className={classes.groupItems}>
      <li className={classes.groupItem}>
        <div className={classes["gropuItem__image-wrapper"]}>
          <img
            src={props.image}
            alt="theme event"
            className={classes["gropuItem__image"]}
          />
        </div>
        <Link className={classes.link} to={`/Explore/${props.id}`}>
          <h5 className={classes["group-item__title"]}>{props.title}</h5>
        </Link>
      </li>
    </Card>
  );
};
export default GroupItems;
