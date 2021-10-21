import react, { Fragment } from "react";
import classes from "./Groups.module.css";
const Groups = () => {
  return (
    <Fragment>
      <div className={classes.groups}>
        <div className={classes.title}>
          <h4>Your groups</h4>
          <span>
            <a href="#">See all</a>
          </span>
        </div>
        <div className={classes.images}>
          <div>Image1</div>
          <div>Image2</div>
          <div>Image3</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Groups;
