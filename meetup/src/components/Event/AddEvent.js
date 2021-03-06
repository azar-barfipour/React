import { useState } from "react";
import classes from "./AddEvent.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Fragment } from "react";
import Modal from "../UI/Modal";

const AddEvent = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [date, setDate] = useState("");
  const [isDateTouched, setIsDateTouched] = useState(false);
  const [location, setLocation] = useState("");
  const [isLocationTouched, setIsLocationTouched] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const titleEmpty = title.trim().length !== 0;
  const titleValid = !titleEmpty && isTitleTouched;
  const dateEmpty = date.trim().length !== 0;
  const dateValid = !dateEmpty && isDateTouched;
  const locationEmpty = location.trim().length !== 0;
  const locationValid = !locationEmpty && isLocationTouched;

  let formIsValid = false;
  if (titleEmpty && dateEmpty && locationEmpty) {
    formIsValid = true;
  }

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const desHandler = (event) => {
    setDescription(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const locationHandler = (event) => {
    setLocation(event.target.value);
  };
  const addGroupsHandler = (event) => {
    event.preventDefault();
    setIsTitleTouched(true);
    setIsDateTouched(true);
    setIsLocationTouched(true);
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
      location: location,
      image:
        "https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    };
    props.onAddGroupItems(groupItems);
    setIsModal(true);
    setTitle("");
    setDescription("");
    setDate("");
    setLocation("");
    setIsTitleTouched(false);
    setIsDateTouched(false);
    setIsLocationTouched(false);
  };
  const titleBlurHandler = () => {
    setIsTitleTouched(true);
  };
  const dateBlurHandler = () => {
    setIsDateTouched(true);
  };
  const locationBlurHandler = () => {
    setIsLocationTouched(true);
  };
  const modalHandler = () => {
    setIsModal(false);
  };
  return (
    <Fragment>
      {isModal && (
        <Modal
          title=""
          message="You just Started your event
    "
          onConfirm={modalHandler}
        />
      )}

      <div className={classes["form-wrapper__title"]}>
        <h2 className={classes["form__title"]}>Start your new event</h2>
      </div>
      <div className={classes["form-wrapper"]}>
        <form className={classes["form"]} onSubmit={addGroupsHandler}>
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
          <label className={classes["form-lable__description"]}>
            Description
          </label>
          <textarea
            rows="4"
            cols="50"
            className={classes["form-input__description"]}
            id="desc"
            onChange={desHandler}
            value={description}
            label="Descriotion"
          ></textarea>
          <Input
            type="datetime-local"
            onChange={dateHandler}
            id="date"
            onBlur={dateBlurHandler}
            label="Date"
            value={date}
          />
          {dateValid && (
            <p className={classes.error}>Don't forget to set date</p>
          )}
          <Input
            placeholder="Street, City"
            type="text"
            onChange={locationHandler}
            id="location"
            onBlur={locationBlurHandler}
            label="Location"
            value={location}
          />
          {locationValid && (
            <p className={classes.error}>Don't forget to set location</p>
          )}
          <Button type="submit" name="ADD" disabled={!formIsValid} />
        </form>
      </div>
    </Fragment>
  );
};
export default AddEvent;
