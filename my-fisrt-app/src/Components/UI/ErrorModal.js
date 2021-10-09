import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p className={classes.content}>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>OK</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
