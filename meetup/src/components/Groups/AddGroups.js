import react, { useState } from "react";
import classes from "./AddGroups.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Card from "../UI/Card";

const AddGroups = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isSelectedFile, setIsSelectedFile] = useState(false);
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
  const imageHandler = (event) => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
    setIsSelectedFile(true);
  };
  // const dateHandler = (event) => {
  //   setDate(event.target.value);
  // };
  const addGroupsHandler = (event) => {
    event.preventDefault();
    console.log(selectedFile);
    setIsTitleTouched(true);
    if (!titleEmpty) {
      return;
    }
    const groupItems = {
      title: title,
      description: description,
      // date: new Date(date),
      image: selectedFile,
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
    <div className={classes.formCard}>
      <form className={classes.addgroups} onSubmit={addGroupsHandler}>
        <Input
          className={`${titleValid ? classes.isempty : {}}`}
          id="title"
          type="text"
          onChange={titleHandler}
          onBlur={titleBlurHandler}
          label="Title"
          value={title}
        />
        {titleValid ? (
          <p className={classes.error}>Fill the blank please!</p>
        ) : (
          ""
        )}
        <label className={classes["label-description"]}>Descriotion</label>
        <textarea
          rows="4"
          cols="50"
          className={classes.description}
          id="desc"
          onChange={desHandler}
          value={description}
          label="Descriotion"
        ></textarea>
        {/* <Input
          type="file"
          name="file"
          id="file"
          label="Image"
          // value={selectedFile}
          onChange={imageHandler}
        /> */}
        {/* <Input
          id="desc"
          type="text"
          onChange={desHandler}
          label="Descriotion"
          value={description}
        /> */}
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
    </div>
  );
};
export default AddGroups;
