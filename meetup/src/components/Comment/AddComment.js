import { Fragment, useState, useRef } from "react";
import classes from "./AddComment.module.css";
import Card from "../UI/Card";

const AddComment = (props) => {
  const commentRef = useRef();
  const addCommentHandler = (event) => {
    event.preventDefault();
    const enteredComment = commentRef.current.value;

    const commentsItem = {
      text: enteredComment,
    };
    props.onAddComment(commentsItem);
  };
  return (
    <Fragment>
      <h5>Your Comment</h5>
      <Card>
        <form onSubmit={addCommentHandler}>
          <div onSubmit={addCommentHandler}>
            <label>comment</label>
            <textarea ref={commentRef} type="text"></textarea>
          </div>
          <button type="submit">Add Comment</button>
        </form>
      </Card>
    </Fragment>
  );
};
export default AddComment;
