import React from "react";
import UserListItems from "./UserListItems";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.listcontroller}>
      {props.items.map((item) => (
        <UserListItems userName={item.userName} age={item.age} key={item.id} />
      ))}
    </Card>
  );
};

export default UserList;
