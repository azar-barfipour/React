import { Link } from "react-router-dom";
import classes from "./SearchItem.module.css";

const SearchItem = (props) => {
  return (
    <li className={classes["search__item"]}>
      <Link to={`${props.id}`} className={classes["search__link"]}>
        <div className={classes["search__image-wrapper"]}>
          <img
            // src={props.image}
            // src="https://images.unsplash.com/photo-1637270057940-921ced86faee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            src="https://source.unsplash.com/200x200?party"
            alt="theme event"
            className={classes["search__image"]}
          />
        </div>
        <p className={classes["search__title"]}>{props.title}</p>
      </Link>
    </li>
  );
};
export default SearchItem;
