
import classes from "./CommentItems.module.css";
import CommentItem from './CommentItem'
const CommentItems = (props) => {
  return (
    <ul className={classes['comment-list']}>
        {props.comments.map((comment) => {
          return (
            <CommentItem
              key={comment.id}
              id={comment.id}
              text={comment.text}
            />
          );
        })}
      </ul> 
  );
};

export default CommentItems;
