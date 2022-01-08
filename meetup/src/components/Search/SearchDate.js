import { useState } from 'react';
import classes from './SearchDate.module.css';
const SearchDate = () => {
const [text,setText] = useState();
const [isClicked, setIsClicked] = useState(false);
const spanLinkHandler = (event) => {
    setIsClicked(true)
    event.preventDefault();
    setText(event.target.innerText);
}
const closeHandler = (event) => {
    setIsClicked(false);
    event.preventDefault();
    setText(null)
}
console.log(text);
console.log(isClicked);
    return <section className={classes['span-wrapper']}>
        <ul className={classes['span__list']}>
        <li className={`${classes['span__item']} ${isClicked && classes['span__item--color']}`}>
            <a className={classes['span__link']} onClick={spanLinkHandler} href='#'>Today</a>
            <span onClick={closeHandler}>&#10005;</span>
        </li>
        <li className={`${classes['span__item']} ${isClicked && classes['span__item--color']}`}>
            <a className={classes['span__link']}  onClick={spanLinkHandler} href='#'>Tommorow</a>
            <span onClick={closeHandler}>&#10005;</span>
            </li>
        <li className={`${classes['span__item']} ${isClicked && classes['span__item--color']}`}>
            <a className={classes['span__link']} onClick={spanLinkHandler} href='#'>This Week</a>
            <span onClick={closeHandler}>&#10005;</span>
            </li>
        <li className={`${classes['span__item']} ${isClicked && classes['span__item--color']}`}>
            <a className={classes['span__link']} onClick={spanLinkHandler} href='#'>This Month</a>
            <span onClick={closeHandler}>&#10005;</span>
            </li>
        </ul>
    </section>
}
export default SearchDate