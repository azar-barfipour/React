import React from "react";
import "./UserList.css";
import UserListItems from "./UserListItems";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <div className="list-controller">
      {props.items.map((item) => (
        <UserListItems userName={item.userName} age={item.age} key={item.id} />
      ))}
    </div>
  );
};

export default UserList;
