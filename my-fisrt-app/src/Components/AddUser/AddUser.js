import React, { useState } from "react";
import "./AddUser.css";
import AddUserButton from "./AddUserButton";

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
    <form onSubmit={addUserHandler}>
      <div className="form-controler">
        <div className="form-controler__items">
          <label>UserName</label>
          <input
            type="text"
            value={enteredUser}
            onChange={inputUserHandler}
          ></input>
          <label>Age(years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={inputAgeHandler}
          ></input>
          <AddUserButton />
        </div>
      </div>
    </form>
  );
};

export default AddUser;
