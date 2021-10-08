import React from "react";
import UserListItems from "./UserListItems";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      {props.items.map((item) => (
        <UserListItems userName={item.userName} age={item.age} key={item.id} />
      ))}
    </Card>
  );
};

export default UserList;
