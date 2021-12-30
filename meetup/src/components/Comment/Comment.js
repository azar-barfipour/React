import { Fragment, useState, useCallback, useEffect } from "react";
import classes from './Comment.module.css'
import AddComment from "./AddComment";
import CommentItems from "./CommentItems";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Comment = () => {
  const [isOpen,setIsOpen] = useState(false);
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comments, setComments] = useState([]);

  const commentFormHandler = (event) => {
    event.preventDefault();
    setIsAddingComment(true);
    setIsOpen(true);
  };
  const commentFormCloseHandler = (event) => {
    event.preventDefault();
    setIsAddingComment(false);
    setIsOpen(false);
  }


  async function AddCommentHandler(comment) {
    const response = await fetch(
      `https://recat-meetup-project-default-rtdb.firebaseio.com/comments/${params.eventDetailId}.json`,
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.json();
  }

  const fetchCommentHandler = useCallback(async () => {
    const response = await fetch(
      `https://recat-meetup-project-default-rtdb.firebaseio.com/comments/${params.eventDetailId}.json`
    );
    console.log(response);
    const data = await response.json();
    const loadedComments = [];
    for (const key in data) {
      loadedComments.push({
        id: key,
        text: data[key].text,
      });
    }
    console.log(loadedComments);
    setComments(loadedComments);
  }, []);

  useEffect(() => {
    fetchCommentHandler();
  }, [fetchCommentHandler]);

  return (
    <Fragment>
      <Link
     onClick={!isOpen ? commentFormHandler : commentFormCloseHandler}
        className={classes['comment__link']}
        to={`/Explore/${params.eventDetailId}/Comment`}
      >
        Add a comment
      </Link>
      {isAddingComment && <AddComment onAddComment={AddCommentHandler} />}
      <CommentItems comments={comments}/>
    </Fragment>
  );
};
export default Comment;
