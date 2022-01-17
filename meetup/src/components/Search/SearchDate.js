import { useState } from "react";
import classes from "./SearchDate.module.css";
const SearchDate = (props) => {
  const [text1, setText1] = useState();
  const [text2, setText2] = useState();
  const [text3, setText3] = useState();
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const spanLinkHandler1 = (event) => {
    setIsClicked1(true);
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText1(event.target.innerText);
  };
  const spanLinkHandler2 = (event) => {
    setIsClicked2(true);
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText2(event.target.innerText);
  };
  const spanLinkHandler3 = (event) => {
    setIsClicked3(true);
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText3(event.target.innerText);
  };
  const closeHandler1 = (event) => {
    setIsClicked1(false);
    event.preventDefault();
    props.onGetText(null);
    setText1(null);
  };
  const closeHandler2 = (event) => {
    setIsClicked2(false);
    event.preventDefault();
    props.onGetText(null);
    setText2(null);
  };
  const closeHandler3 = (event) => {
    setIsClicked3(false);
    event.preventDefault();
    props.onGetText(null);
    setText3(null);
  };
  // props.onGetText([text1,text2,text3,text4]);
  return (
    <section className={classes["span-wrapper"]}>
      <ul className={classes["span__list"]}>
        <li
          className={`${classes["span__item"]} ${
            isClicked1 && classes["span__item--color1"]
          }`}
        >
          <a
            className={classes["span__link"]}
            onClick={spanLinkHandler1}
            type="button"
          >
            Today
          </a>
          {isClicked1 && (
            <span onClick={closeHandler1} className={classes["span__close"]}>
              &#215;
            </span>
          )}
        </li>
        <li
          className={`${classes["span__item"]} ${
            isClicked2 && classes["span__item--color2"]
          }`}
        >
          <a
            className={classes["span__link"]}
            onClick={spanLinkHandler2}
            type="button"
          >
            Tomorrow
          </a>
          {isClicked2 && (
            <span onClick={closeHandler2} className={classes["span__close"]}>
              &#215;
            </span>
          )}
        </li>
        <li
          className={`${classes["span__item"]} ${
            isClicked3 && classes["span__item--color3"]
          }`}
        >
          <a
            className={classes["span__link"]}
            onClick={spanLinkHandler3}
            type="button"
          >
            This Week
          </a>
          {isClicked3 && (
            <span onClick={closeHandler3} className={classes["span__close"]}>
              &#215;
            </span>
          )}
        </li>
      </ul>
    </section>
  );
};
export default SearchDate;
