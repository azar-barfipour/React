import { Fragment, useRef,useState } from "react";
import classes from "./AddComment.module.css";

const AddComment = (props) => {
const [isCommentTouched,setIsCommentTouched] = useState(false);  
const commentRef = useRef();
const addCommentHandler = (event) => {
  event.preventDefault();
  setIsCommentTouched(true);
  const enteredComment = commentRef.current.value;
    const commentsItem = {
      text: enteredComment,
    };
    props.onAddComment(commentsItem);
  };
  const isCommentEmpty = commentRef.current.value.length === 0;
  const isCommentValid = !isCommentEmpty && isCommentTouched;
  const commentBlurHandler = () =>{
    setIsCommentTouched(true);
  }
  return (
    <Fragment>
        <form onSubmit={addCommentHandler} className={classes['from-comment']}>
          <div onSubmit={addCommentHandler} className={classes['from-comment__wrapper']}>
            <textarea ref={commentRef} type="text" rows="4" cols="50" onBlur={commentBlurHandler} className={`${classes['from-comment__desc']} ${isCommentValid ? classes.isCommentValid : ""} `}></textarea>
          </div>
          <button type="submit" className={classes.btn}>POST</button>
        </form>
    </Fragment>
  );
};
export default AddComment;
