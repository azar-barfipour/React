import react, { useState } from "react";
import classes from "./AddGroups.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const AddGroups = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isSelectedFile, setIsSelectedFile] = useState(false);
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

  const addGroupsHandler = (event) => {
    event.preventDefault();
    setIsTitleTouched(true);
    if (!titleEmpty) {
      return;
    }
    const groupItems = {
      title: title,
      description: description,
      image:
        "https://images.unsplash.com/photo-1464047736614-af63643285bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    };
    props.onAddGroupItems(groupItems);

    setTitle("");
    setDescription("");
    setIsTitleTouched(false);
  };
  const titleBlurHandler = () => {
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

        <Button type="submit" name="ADD" disabled={!formIsValid} />
      </form>
    </div>
  );
};
export default AddGroups;
