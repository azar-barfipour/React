import { Fragment, useRef, useState, useEffect } from "react";
import classes from "./AddComment.module.css";

const AddComment = (props) => {
  const [isCommentTouched, setIsCommentTouched] = useState(false);
  const commentRef = useRef();
  const addCommentHandler = (event) => {
    event.preventDefault();
    const enteredComment = commentRef.current.value;
    if (enteredComment.length === 0) {
      setIsCommentTouched(true);
      return;
    }
    const commentsItem = {
      text: enteredComment,
    };
    props.onAddComment(commentsItem);
    setIsCommentTouched(false);
  };

  return (
    <Fragment>
      <form onSubmit={addCommentHandler} className={classes["from-comment"]}>
        <div
          onSubmit={addCommentHandler}
          className={classes["from-comment__wrapper"]}
        >
          <textarea
            ref={commentRef}
            type="text"
            rows="4"
            cols="50"
            className={`${classes["from-comment__desc"]}`}
          ></textarea>
          {isCommentTouched ? (
            <p className={classes["from-comment__blur"]}>
              Don't forget to set location
            </p>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className={classes.btn}>
          POST
        </button>
      </form>
    </Fragment>
  );
};
export default AddComment;
