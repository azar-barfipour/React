import classes from "./YourGroupsDetails.module.css";
import Card from "../../UI/Card";
const YourGroupsDetails = (props) => {
  return (
    <Card className={classes.details}>
      <li>
        <img
          // src={props.image}
          src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="theme event"
          className={classes["gropuItem__image"]}
        />
        <h5>{props.title}</h5>
      </li>
    </Card>
  );
};
export default YourGroupsDetails;
