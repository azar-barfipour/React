import SearchItem from "./SearchItem";
const SearchItems = (props) => {
  return (
    <ul>
      {props.events.map((event) => {
        return <SearchItem key={event.id} title={event.title} />;
      })}
    </ul>
  );
};
export default SearchItems;
