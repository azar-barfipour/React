import { Fragment, useRef,useState } from "react";
import classes from "./AddComment.module.css";

const AddComment = (props) => {
const [isEmpty,setIsEmpy] = useState(false);
  const commentRef = useRef();
  const addCommentHandler = (event) => {
    event.preventDefault();
    const enteredComment = commentRef.current.value;

    const commentsItem = {
      text: enteredComment,
    };
    if(enteredComment.trim().length === 0) {
      setIsEmpy(true)
      return;
    }
    props.onAddComment(commentsItem);
  };
  return (
    <Fragment>
        <form onSubmit={addCommentHandler} className={classes['from-comment']}>
          <div onSubmit={addCommentHandler} className={classes['from-comment__wrapper']}>
            <textarea ref={commentRef} type="text" rows="4" cols="50" className={classes['from-comment__desc']}></textarea>
          </div>
          <button type="submit" className={classes.btn}>POST</button>
        </form>
    </Fragment>
  );
};
export default AddComment;
