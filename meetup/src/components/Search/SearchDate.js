import { useState } from 'react';
import classes from './SearchDate.module.css';
const SearchDate = () => {
const [text,setText] = useState();
const [isClicked1, setIsClicked1] = useState(false);
const [isClicked2, setIsClicked2] = useState(false);
const [isClicked3, setIsClicked3] = useState(false);
const [isClicked4, setIsClicked4] = useState(false);
const spanLinkHandler1 = (event) => {
    setIsClicked1(true)
    event.preventDefault();
    setText(event.target.innerText);
}
const spanLinkHandler2 = (event) => {
    setIsClicked2(true)
    event.preventDefault();
    setText(event.target.innerText);
}
const spanLinkHandler3 = (event) => {
    setIsClicked3(true)
    event.preventDefault();
    setText(event.target.innerText);
}
const spanLinkHandler4 = (event) => {
    setIsClicked4(true)
    event.preventDefault();
    setText(event.target.innerText);
}
const closeHandler1 = (event) => {
    setIsClicked1(false);
    event.preventDefault();
    setText(null)
}
const closeHandler2 = (event) => {
    setIsClicked2(false);
    event.preventDefault();
    setText(null)
}
const closeHandler3 = (event) => {
    setIsClicked3(false);
    event.preventDefault();
    setText(null)
}
const closeHandler4 = (event) => {
    setIsClicked4(false);
    event.preventDefault();
    setText(null)
}
console.log(text);
    return <section className={classes['span-wrapper']}>
        <ul className={classes['span__list']}>
        <li className={`${classes['span__item']} ${isClicked1 && classes['span__item--color1']}`}>
            <a className={classes['span__link']} onClick={spanLinkHandler1} href='#'>Today</a>
            <span onClick={closeHandler1}>&#10005;</span>
        </li>
        <li className={`${classes['span__item']} ${isClicked2 && classes['span__item--color2']}`}>
            <a className={classes['span__link']}  onClick={spanLinkHandler2} href='#'>Tommorow</a>
            <span onClick={closeHandler2}>&#10005;</span>
            </li>
        <li className={`${classes['span__item']} ${isClicked3 && classes['span__item--color3']}`}>
            <a className={classes['span__link']} onClick={spanLinkHandler3} href='#'>This Week</a>
            <span onClick={closeHandler3}>&#10005;</span>
            </li>
        <li className={`${classes['span__item']} ${isClicked4 && classes['span__item--color4']}`}>
            <a className={classes['span__link']} onClick={spanLinkHandler4} href='#'>This Month</a>
            <span onClick={closeHandler4}>&#10005;</span>
            </li>
        </ul>
    </section>
}
export default SearchDate