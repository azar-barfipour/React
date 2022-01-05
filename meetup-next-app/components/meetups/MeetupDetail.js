
import classes from './MeeupDetail.module.css'
const MeetupDetail = (props) => {
    return <section className={classes.detail}>
        <img src={props.image}></img>
        <h3>{props.tilte}</h3>
        <p>{props.description}</p>
    </section>
}
export default MeetupDetail