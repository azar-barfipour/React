import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import classes from "./MealsItemForm.module.css";
import Input from "../UI/Input";

const MealsItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber < 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref: { amountInputRef },
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enetr valid Amount (1-5).</p>}
    </form>
  );
};
export default MealsItemForm;
