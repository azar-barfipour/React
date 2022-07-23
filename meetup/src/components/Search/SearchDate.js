import classes from "./SearchDate.module.css";
const SearchDate = ({
  isTodClicked,
  isTomClicked,
  isWeekClicked,
  onIsTodClicked,
  onIsTomClicked,
  onIsWeekClicked,
}) => {
  return (
    <section className={classes["span-wrapper"]}>
      <ul className={classes["span__list"]}>
        <li
          className={`${classes["span__item"]} ${
            isTodClicked && classes["span__item--color1"]
          }`}
        >
          <a
            className={classes["span__link"]}
            onClick={onIsTodClicked}
            type="button"
            href="#"
          >
            Today
          </a>
        </li>
        <li
          className={`${classes["span__item"]} ${
            isTomClicked && classes["span__item--color2"]
          }`}
        >
          <a
            className={classes["span__link"]}
            onClick={onIsTomClicked}
            type="button"
            href="#"
          >
            Tomorrow
          </a>
        </li>
        <li
          className={`${classes["span__item"]} ${
            isWeekClicked && classes["span__item--color3"]
          }`}
        >
          <a
            className={classes["span__link"]}
            onClick={onIsWeekClicked}
            type="button"
            href="#"
          >
            This Week
          </a>
        </li>
      </ul>
    </section>
  );
};
export default SearchDate;
