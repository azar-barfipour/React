import { useContext, Fragment,useState } from "react";
import classes from "./CalendarItems.module.css";
import AuthContext from "../../store/auth-context";
import CalendarItem from "./CalendarItem";

const CalendarItems = (props) => {
  const [deleted,setDeleted] = useState([]);
  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  const emptyItems = props.items.length === 0;
const deleteEventHandler=(eventId)=>{
  console.log(props.items)
  setDeleted(props.items.filter(event=> event.id !== eventId))
}
console.log(deleted);
  return (
    <Fragment>
      <div className={classes.calendar}>
        <div className={classes['calendar__wrapper']}>
          {isLoggedIn ? (
            <h4>Your calendar</h4>
          ) : (
            <div className={classes.header}>
              <section className={classes['header__wrapper']}>
                <h1 className={classes['header__title']}>Dive in! There are so many things to do on Meetup</h1>
                <p className={classes['header__desc']}>  
                  Make friends, find support, grow a business, and explore your
                  interests. Thousands of events are happening every day, both
                  online and in person!
                </p>
              </section>
              <section className={classes['header__image']}>
                <img src="https://www.meetup.com/_next/image/?url=%2Fimages%2Fshared%2Fonline_events.svg&w=640&q=75"></img>
              </section>
            </div>
          )}
        </div>
       {!emptyItems ? <ul className={classes['calendar__list']}>
          {props.items.map((item) => {
            return (
             <CalendarItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                date={item.date}
                location={item.location}
                onDelete={deleteEventHandler}
              /> 
            );
          })}
        </ul> : isLoggedIn &&  <p className={classes['calendar__empty']}>Your calendar is empty</p>}
      </div>
    </Fragment>
  );
};
export default CalendarItems;
