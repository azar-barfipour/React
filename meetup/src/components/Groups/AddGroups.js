import react, { useState } from "react";
import classes from "./AddGroups.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const AddGroups = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
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
    if (title.trim().length === 0) {
      setIsEmpty(false);
      return;
    }
    props.onAddGroupItems(groupItems);

    setTitle("");
    setDescription("");
  };
  return (
    <form className={classes.addgroups} onSubmit={addGroupsHandler}>
      <h3>Adding new groups</h3>
      <Input
        className={`${!isEmpty ? classes.isempty : {}}`}
        id="title"
        type="text"
        onChange={titleHandler}
        label="Group Title"
        value={title}
      />
      <Input
        id="desc"
        type="text"
        onChange={desHandler}
        label="Group Descriotion"
        value={description}
      />
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
