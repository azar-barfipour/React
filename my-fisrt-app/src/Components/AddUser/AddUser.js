import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const inputUserHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const inputAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    setEnteredUser("");
    setEnteredAge("");
    const listItemes = {
      id: Math.random(),
      userName: enteredUser,
      age: enteredAge,
    };
    if (enteredUser.length === 0 || enteredAge.length === 0) {
      alert("empty");
      return;
    }
    if (enteredAge < 1) {
      alert("negative");
      return;
    }

    props.onAddUser(listItemes);
  };

  return (
    // <ErrorModal />
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div className="form-controler">
          <div className="form-controler__items">
            <label htmlFor="UserName">UserName</label>
            <input
              id="UserName"
              type="text"
              value={enteredUser}
              onChange={inputUserHandler}
            ></input>
            <label htmlFor="age">Age(years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={inputAgeHandler}
            ></input>
            <Button />
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
