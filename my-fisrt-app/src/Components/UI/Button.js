import React from "react";
import classes from "./Button.module.css";

const Button = () => {
  return (
    <button className={classes.button} type="submit">
      Add User
    </button>
  );
};
export default Button;
