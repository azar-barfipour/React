import react, { useState } from "react";
import classes from "./AddGroups.module.css";

const AddGroups = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [date, setDate] = useState("");
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const desHandler = (event) => {
    setDescription(event.target.value);
  };
  // const dateHandler = (event) => {
  //   setDate(event.target.value);
  // };
  const addGroupsHandler = (event) => {
    event.preventDefault();
    const groupItems = {
      title: title,
      description: description,
      // date: new Date(date),
    };
    props.onAddGroupItems(groupItems);
  };
  return (
    <form className={classes.addgroups} onSubmit={addGroupsHandler}>
      <h3>Adding new groups</h3>
      <label>title</label>
      <input type="text" onChange={titleHandler}></input>
      <label>description</label>
      <input type="text" onChange={desHandler}></input>
      {/* <label>Date</label> */}
      {/* <input type="datetime-local" onChange={dateHandler}></input> */}
      <button type="submit">ADD</button>
    </form>
  );
};
export default AddGroups;
