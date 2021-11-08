import classes from "./GroupItemsDetails.module.css";
const GroupItemsDetails = (props) => {
  return (
    <li>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </li>
  );
};
export default GroupItemsDetails;
