import react, { useState } from "react";
import classes from "./AddGroups.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const AddGroups = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  // const [date, setDate] = useState("");
  let formIsValid = false;
  if (title.trim().length !== 0) {
    formIsValid = true;
  }

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
    setIsTitleTouched(true);
    if (title.trim().length === 0) {
      return;
    }
    const groupItems = {
      title: title,
      description: description,
      // date: new Date(date),
    };
    props.onAddGroupItems(groupItems);

    setTitle("");
    setDescription("");
    setIsTitleTouched(false);
  };
  const titleBlurHandler = (event) => {
    setIsTitleTouched(true);
  };
  return (
    <form className={classes.addgroups} onSubmit={addGroupsHandler}>
      <h3>Adding new groups</h3>
      <Input
        className={`${
          isTitleTouched && title.trim().length === 0 ? classes.isempty : {}
        }`}
        id="title"
        type="text"
        onChange={titleHandler}
        onBlur={titleBlurHandler}
        label="Group Title"
        value={title}
      />
      {isTitleTouched && title.trim().length === 0 ? (
        <p>Insert the title.</p>
      ) : (
        ""
      )}
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
      <Button
        type="submit"
        name="ADD"
        className={` ${!formIsValid ? classes.disabled : ""} `}
      />
    </form>
  );
};
export default AddGroups;
