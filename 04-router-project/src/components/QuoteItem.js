const QuoteItem = (props) => {
  return (
    <li>
      <p>{props.text}</p>
      <p>{props.author}</p>
    </li>
  );
};
export default QuoteItem;
