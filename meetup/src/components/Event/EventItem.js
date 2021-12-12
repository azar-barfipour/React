import react, { useState } from "react";
import classes from "./EventItem.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";

const EventItem = (props) => {

  return (
    // groupItemWrap
    <Card className={classes['event-items']}>
      <li className={classes['event-item']}>
        <Link className={classes['event-item__link']} to={`/Explore/${props.id}`}>
          <div className={classes["event-item__image-wrapper"]}>
            <img
              // src={props.image}
              // src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              src="https://source.unsplash.com/300x360?party"
              alt="theme event"
              className={classes["event-item__image"]}
            />
          </div>
          <h5 className={classes["event-item__title"]}>{props.title}</h5>
        </Link>
      </li>
    </Card>
  );
};
export default EventItem;
