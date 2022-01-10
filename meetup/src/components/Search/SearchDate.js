import { useState } from 'react';
import classes from './SearchDate.module.css';
const SearchDate = (props) => {
const [text1,setText1] = useState();
const [text2,setText2] = useState();
const [text3,setText3] = useState();
const [text4,setText4] = useState();
const [isClicked1, setIsClicked1] = useState(false);
const [isClicked2, setIsClicked2] = useState(false);
const [isClicked3, setIsClicked3] = useState(false);
const [isClicked4, setIsClicked4] = useState(false);
const spanLinkHandler1 = (event) => {
    setIsClicked1(true)
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText1(event.target.innerText);
}
const spanLinkHandler2 = (event) => {
    setIsClicked2(true)
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText2(event.target.innerText);
}
const spanLinkHandler3 = (event) => {
    setIsClicked3(true)
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText3(event.target.innerText);
}
const spanLinkHandler4 = (event) => {
    setIsClicked4(true)
    event.preventDefault();
    props.onGetText(event.target.innerText);
    setText4(event.target.innerText);
}
const closeHandler1 = (event) => {
    setIsClicked1(false);
    event.preventDefault();
    // props.onGetText(event.target.innerText);
    setText1(null)
}
const closeHandler2 = (event) => {
    setIsClicked2(false);
    event.preventDefault();
    // props.onGetText(event.target.innerText);
    setText2(null)
}
const closeHandler3 = (event) => {
    setIsClicked3(false);
    event.preventDefault();
    // props.onGetText(event.target.innerText);
    setText3(null)
}
const closeHandler4 = (event) => {
    setIsClicked4(false);
    event.preventDefault();
    // props.onGetText(event.target.innerText);
    setText4(null)
}
// props.onGetText([text1,text2,text3,text4]);
    return <section className={classes['span-wrapper']}>
        <ul className={classes['span__list']}>
        <li className={`${classes['span__item']} ${isClicked1 && classes['span__item--color1']}`}>
            <button className={classes['span__link']} onClick={spanLinkHandler1} type='button'>Today</button>
            <span onClick={closeHandler1}>&#10005;</span>
        </li>
        <li className={`${classes['span__item']} ${isClicked2 && classes['span__item--color2']}`}>
            <button className={classes['span__link']}  onClick={spanLinkHandler2} type='button'>Tommorow</button>
            <span onClick={closeHandler2}>&#10005;</span>
            </li>
        <li className={`${classes['span__item']} ${isClicked3 && classes['span__item--color3']}`}>
            <button className={classes['span__link']} onClick={spanLinkHandler3} type='button'>This Week</button>
            <span onClick={closeHandler3}>&#10005;</span>
            </li>
        <li className={`${classes['span__item']} ${isClicked4 && classes['span__item--color4']}`}>
            <button className={classes['span__link']} onClick={spanLinkHandler4} type='button'>This Month</button>
            <span onClick={closeHandler4}>&#10005;</span>
            </li>
        </ul>
    </section>
}
export default SearchDate