import react, { useState } from "react";
import classes from "./AddGroups.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

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
      <Input type="text" onChange={titleHandler} label="Group Title" />
      <Input type="text" onChange={desHandler} label="Group Descriotion" />
      {/* <label>title</label>
      <input type="text" onChange={titleHandler}></input>
      <label>description</label>
      <input type="text" onChange={desHandler}></input>  */}
      {/* <label>Date</label> */}
      {/* <input type="datetime-local" onChange={dateHandler}></input> */}
      <Button type="submit" name="ADD" />
    </form>
  );
};
export default AddGroups;
