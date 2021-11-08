import react, { useState } from "react";
import classes from "./AddGroups.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

const AddGroups = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  // const [date, setDate] = useState("");
  const titleEmpty = title.trim().length !== 0;
  const titleValid = !titleEmpty && isTitleTouched;

  let formIsValid = false;
  if (titleEmpty) {
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
    if (!titleEmpty) {
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
    <Card className={classes.formCard}>
      <form className={classes.addgroups} onSubmit={addGroupsHandler}>
        <Input
          className={`${titleValid ? classes.isempty : {}}`}
          id="title"
          type="text"
          onChange={titleHandler}
          onBlur={titleBlurHandler}
          label="Group Title"
          value={title}
        />
        {titleValid ? (
          <p className={classes.error}>Fill the blank please!</p>
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
          disabled={!formIsValid}
          // className={` ${!formIsValid ? classes.button : ""} `}
        />
      </form>
    </Card>
  );
};
export default AddGroups;
