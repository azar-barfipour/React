import classes from "./GroupItems.module.css";
import Card from "../UI/Card";
const GroupItems = (props) => {
  return (
    <Card className={classes.groupItems}>
      <li>
        <p>{props.title}</p>
      </li>
    </Card>
  );
};
export default GroupItems;
