import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
return<div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    return(
        <div className={classes['modal-wrapper']}>
        <span className={classes['modal--close']} onClick={props.onConfirm}>&#x2715;</span>
        <div>
        <h4 className={classes['modal__title']}>{props.title}</h4>
        <p className={classes['modal__desc']}>{props.message}</p>
        </div>
        </div>)

}

const Modal = (props) => {
    return(
    <Fragment>
        {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById('backdrop-root'))}
        {ReactDom.createPortal(<ModalOverlay onConfirm={props.onConfirm} title={props.title} message={props.message}/>,document.getElementById('overlay-root'))}
    </Fragment>
    )}


export default Modal;
