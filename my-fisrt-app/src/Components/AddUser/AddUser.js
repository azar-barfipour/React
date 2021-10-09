import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

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
      setError({
        title: "Something went wrong!!!",
        message: "Please fill input itemes",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Something went wrong!!!",
        message: "Please insert Age greater than 0",
      });
      return;
    }

    props.onAddUser(listItemes);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
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
              <Button>Add User</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
