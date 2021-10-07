import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import UserList from "./Components/UserList/UserList";

const DUMMI = [
  {
    id: 1,
    userName: "azar-b",
    age: 30,
  },
  {
    id: 2,
    userName: "m-a",
    age: 31,
  },
];
function App() {
  const [newUsers, setNewUsers] = useState(DUMMI);

  const addUserHandler = (newList) => {
    setNewUsers((prevUsers) => {
      return [newList, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList items={newUsers} />
    </div>
  );
}

export default App;
