import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li>
      <p>{props.text}</p>
      <p>{props.author}</p>
      <Link to={`/quotes/${props.id}`}>Details</Link>
    </li>
  );
};
export default QuoteItem;
