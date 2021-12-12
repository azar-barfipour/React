import { useState } from "react";
import classes from "./AddEvent.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import GoogleMap from "./GoogleMap";
import { Fragment } from "react/cjs/react.production.min";

const AddEvent = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isSelectedFile, setIsSelectedFile] = useState(false);
  const [date, setDate] = useState("");
  const [isDateTouched, setIsDateTouched] = useState(false);
  const titleEmpty = title.trim().length !== 0;
  const titleValid = !titleEmpty && isTitleTouched;
  const dateEmpty = date.trim().length !== 0;
  const dateValid = !dateEmpty && isDateTouched;

  let formIsValid = false;
  if (titleEmpty && dateEmpty) {
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
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const addGroupsHandler = (event) => {
    event.preventDefault();
    console.log(selectedFile);
    setIsTitleTouched(true);
    setIsDateTouched(true);
    if (!titleEmpty) {
      return;
    }
    if (!dateEmpty) {
      return;
    }
    const groupItems = {
      title: title,
      description: description,
      date: new Date(date),
      // image: selectedFile,
    };
    props.onAddGroupItems(groupItems);

    setTitle("");
    setDescription("");
    setDate("");
    setIsTitleTouched(false);
    setIsDateTouched(false);
  };
  const titleBlurHandler = () => {
    setIsTitleTouched(true);
  };
  const dateBlurHandler = () => {
    setIsDateTouched(true);
  };
  return (
      <Fragment>
    <div className={classes['form-wrapper__title']}>
      <h2 className={classes['form__title']}>Start your new event</h2>
      </div>
    <div className={classes['form-wrapper']}>
      <form className={classes['form']} onSubmit={addGroupsHandler}>
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
          <p className={classes.error}>Don't forget to name your event</p>
        ) : (
          ""
        )}
        <label className={classes["form-lable__description"]}>Descriotion</label>
        <textarea
          rows="4"
          cols="50"
          className={classes["form-input__description"]}
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
        <Input
          type="datetime-local"
          onChange={dateHandler}
          id="date"
          onBlur={dateBlurHandler}
          label="Date"
          value={date}
        />
        {dateValid && <p className={classes.error}>Don't forget to set date</p>}
        {/* <GoogleMap></GoogleMap> */}
        <Input
          type="text"
          // onChange={locationHandler}
          id="location"
          label="Location"
          // value={location}
        />
        <Button
          type="submit"
          name="ADD"
          disabled={!formIsValid}
          // className={` ${!formIsValid ? classes.button : ""} `}
        />
      </form>
    </div>
    </Fragment>
  );
};
export default AddEvent;
