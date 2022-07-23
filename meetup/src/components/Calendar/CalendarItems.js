import { useContext, Fragment } from "react";
import classes from "./CalendarItems.module.css";
import AuthContext from "../../store/auth-context";
import CalendarItem from "./CalendarItem";

const CalendarItems = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const emptyItems = props.items.length === 0;

  const deleteEventHandler = async (eventId) => {
    // update backend
    const response = await fetch(
      `https://recat-meetup-project-default-rtdb.firebaseio.com/events/${eventId}.json`,
      {
        method: "DELETE",
      }
    );

    // update state
    props.deleteEvent(eventId);
  };

  return (
    <Fragment>
      <div className={classes.calendar}>
        <div className={classes["calendar__wrapper"]}>
          {isLoggedIn ? (
            <h4>Your calendar</h4>
          ) : (
            <div className={classes.header}>
              <section className={classes["header__wrapper"]}>
                <h1 className={classes["header__title"]}>
                  Dive in! There are so many things to do on Meetup
                </h1>
                <p className={classes["header__desc"]}>
                  Make friends, find support, grow a business, and explore your
                  interests. Thousands of events are happening every day, both
                  online and in person!
                </p>
              </section>
              <section className={classes["header__image"]}>
                <img
                  src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
                  alt="party"
                ></img>
              </section>
            </div>
          )}
        </div>
        {!emptyItems ? (
          <>
            <ul className={classes["calendar__list"]}>
              {props.items.map((item) => {
                return (
                  <CalendarItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    location={item.location}
                    onDelete={deleteEventHandler}
                  />
                );
              })}
            </ul>
          </>
        ) : (
          isLoggedIn && (
            <p className={classes["calendar__empty"]}>Your calendar is empty</p>
          )
        )}
      </div>
    </Fragment>
  );
};
export default CalendarItems;
