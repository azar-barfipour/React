import Card from "../UI/Card";
import classes from "./CommentItems.module.css";
const CommentItems = (props) => {
  return (
    <Card>
      <li>
        <p>{props.text}</p>
      </li>
    </Card>
  );
};

export default CommentItems;
