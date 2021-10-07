import React from "react";
import "./UserListItems.css";

const UserListItems = (props) => {
  return (
    <div>
      <div className="useritems-controller">
        {props.userName + " (" + props.age + " years old)"}
      </div>
    </div>
  );
};
export default UserListItems;
