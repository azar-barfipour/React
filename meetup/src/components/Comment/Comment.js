import { Fragment, useState, useCallback, useEffect } from "react";
import AddComment from "./AddComment";
import CommentItems from "./CommentItems";
import { useParams } from "react-router-dom";
const Comment = () => {
  const params = useParams();
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [comments, setComments] = useState([]);

  const commentFormHandler = (event) => {
    event.preventDefault();
    setIsAddingComment(true);
  };

  async function AddCommentHandler(comment) {
    const response = await fetch(
      `https://recat-meetup-project-default-rtdb.firebaseio.com/comments/${params.groupDetailId}.json`,
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
      `https://recat-meetup-project-default-rtdb.firebaseio.com/comments/${params.groupDetailId}.json`
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
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button onClick={commentFormHandler}>Add a Comment</button>
      )}
      {isAddingComment && <AddComment onAddComment={AddCommentHandler} />}
      <ul>
        {comments.map((comment) => {
          return (
            <CommentItems
              key={comment.id}
              id={comment.id}
              text={comment.text}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};
export default Comment;
