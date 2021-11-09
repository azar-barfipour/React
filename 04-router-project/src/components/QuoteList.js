import QuoteItem from "./QuoteItem";

const QuoteList = (props) => {
  return (
    <ul>
      {props.quotes.map((quote) => {
        return (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            text={quote.text}
            author={quote.author}
          />
        );
      })}
    </ul>
  );
};
export default QuoteList;
