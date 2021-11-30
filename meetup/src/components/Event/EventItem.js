import react, { useState } from "react";
import classes from "./EventItem.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const EventItem = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "short" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();
  // const hour = props.date.getHours();
  // const minute = props.date.getMinutes();

  return (
    // groupItemWrap
    <Card className={classes.groupItems}>
      <li className={classes.groupItem}>
        <Link className={classes.link} to={`/Explore/${props.id}`}>
          <div className={classes["gropuItem__image-wrapper"]}>
            <img
              // src={props.image}
              src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="theme event"
              className={classes["gropuItem__image"]}
            />
          </div>

          <h5 className={classes["group-item__title"]}>{props.title}</h5>
        </Link>
      </li>
    </Card>
  );
};
export default EventItem;
