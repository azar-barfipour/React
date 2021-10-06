import React from "react";
import "./AddUser.css";
import AddUserButton from "./AddUserButton";

const AddUser = () => {
  return (
    <form>
      <div className="form-controler">
        <div className="form-controler__items">
          <lable>UserName</lable>
          <input type="text"></input>
          <lable>Age(years)</lable>
          <input type="text"></input>
          <AddUserButton />
        </div>
      </div>
    </form>
  );
};

export default AddUser;
