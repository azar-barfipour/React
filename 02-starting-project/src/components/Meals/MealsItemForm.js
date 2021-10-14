import React from "react";
import Button from "../UI/Button";
import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: 1,
        }}
      />
      <Button>+ Add</Button>
    </form>
  );
};
export default MealsItemForm;
