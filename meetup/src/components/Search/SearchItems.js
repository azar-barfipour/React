import SearchItem from "./SearchItem";
import classes from "./SearchItems.module.css";
const SearchItems = (props) => {
  return (
    <div className={classes["search__wrapper"]}>
      <ul className={classes["search__list"]}>
        {props.events.map((event) => {
          return (
            <SearchItem
              key={event.id}
              id={event.id}
              title={event.title}
              image={event.image}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default SearchItems;
