import classes from './Modal.module.css'
const Modal = (props) =>{
    return(
    <div className={classes.backdrop} onClick={props.onConfirm}>
        <div className={classes['modal-wrapper']}>
        <span className={classes['modal--close']} onClick={props.onConfirm}>&#x2715;</span>
        <div>
        <h4 className={classes['modal__title']}>{props.title}</h4>
        <p className={classes['modal__desc']}>{props.message}</p>
        </div>
        </div>
    </div>);
}
export default Modal