import classes from "./YourGroupsDetails.module.css";
import Card from "../../UI/Card";
const YourGroupsDetails = (props) => {
  return (
    <Card className={classes.details}>
      <li>
        <h5>{props.title}</h5>
      </li>
      <li>
        <p>{props.description}</p>
      </li>
    </Card>
  );
};
export default YourGroupsDetails;
